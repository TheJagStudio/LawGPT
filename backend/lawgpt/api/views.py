from django.shortcuts import render,HttpResponse
from django.http import StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.files.storage import FileSystemStorage
from .models import Document
from django.contrib.sessions.models import Session
from django.middleware.csrf import get_token
from allauth.socialaccount.models import SocialAccount, SocialToken, SocialApp
from markdownify import markdownify

from transformers import AutoTokenizer, AutoModel
import torch
from ctransformers import AutoModelForCausalLM, AutoConfig
import os
import numpy as np
import faiss
from scipy import spatial
import time
import json
import textwrap
import requests
from bs4 import BeautifulSoup
import google.generativeai as genai
import openai
import random


genai.configure(api_key="AIzaSyDvljNyAfm2x83ZZpSFTNJrw0dQJf14030")
apiKeys = []
try:
    url = "https://gptlesson1.oss-cn-beijing.aliyuncs.com/meta.json"
    response = requests.get(url, timeout=10)
    apiKeys = response.json()["APIkey"]["keys"]
    print("API keys loaded")
except:
    apiKeys = []
    print("API keys not loaded")
    
B_INST, E_INST = "[INST]", "[/INST]"
B_SYS, E_SYS = "<<SYS>>\n", "\n<</SYS>>\n\n"
# B_INST, E_INST = "<s>", "</s>"
# B_SYS, E_SYS = "\n", "\n"
DEFAULT_SYSTEM_PROMPT = "You are an Chatbot who is a lawyer. You are helping a client who wants answers about a legal issue."
clarityWorking = False
googleApiWorking = True

print("Loading LLM...")
model_name = "nlpaueb/legal-bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

llm = AutoModelForCausalLM.from_pretrained(
    "./models/llama-2-7b-chat.Q2_K.gguf",
    model_type="llama",
    gpu_layers=32,
)
print("LLM Loaded")


def get_embedding(text):
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state.mean(dim=1).squeeze().numpy()

def strings_ranked_by_relatedness(query, top_n=5):
    with open("chat.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    def relatedness_fn(x, y): return 1 - spatial.distance.cosine(x, y)
    query_embedding = get_embedding(query)
    strings_and_relatednesses = [
        (row["answer"], relatedness_fn(query_embedding, row["embedding"])) for row in data
    ]
    strings_and_relatednesses.sort(key=lambda x: x[1], reverse=True)
    strings, relatednesses = zip(*strings_and_relatednesses)
    return strings[:top_n], relatednesses[:top_n]

def get_prompt(instruction, new_system_prompt=DEFAULT_SYSTEM_PROMPT):
    SYSTEM_PROMPT = B_SYS + new_system_prompt + E_SYS
    prompt_template = B_INST + SYSTEM_PROMPT + instruction + E_INST
    return prompt_template




def helloWord(request):
    return HttpResponse("Hello World!")

@csrf_exempt
def IndianKanonRecommend(request):
    try:
        if request.method == "POST":
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            query = body["query"]
            url = "https://indiankanoon.org/qsuggest/?term="+query
            response = requests.request("GET", url)
            output  = response.json()
            return HttpResponse(json.dumps(output), content_type="application/json")
        else:
            output = {"error":"Method not allowed"}
            return HttpResponse(json.dumps(output), content_type="application/json")
    except Exception as e:
        output = {"error":str(e)}
        return HttpResponse(json.dumps(output), content_type="application/json")
    
@csrf_exempt
def IndianKanonSearch(request):
    try:
        if request.method == "POST":
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            query = body["query"]
            url = "https://indiankanoon.org/search/?formInput="+query
            response = requests.request("GET", url)
            soup = BeautifulSoup(response.text, "html.parser")
            results = soup.find_all("div",{"class":"result"})
            data = []
            for result in results:
                try:
                    title = result.find("div",{"class":"result_title"}).text.strip()
                    try:
                        headline = result.find("div",{"class":"headline"}).text.strip()
                    except:
                        headline = ""
                    try:
                        docsource = result.find("div",{"class":"docsource"}).text.strip()
                    except:
                        docsource = ""
                    for a in result.find_all("a"):
                        if "/doc/" in a.get("href"):
                            docUrl = a.get("href")
                            break
                    data.append({"title":title,"headline":headline,"docsource":docsource,"docUrl":docUrl})
                except:
                    pass
            output = data
            return HttpResponse(json.dumps(output), content_type="application/json")
        else:
            output = {"error":"Method not allowed"}
            return HttpResponse(json.dumps(output), content_type="application/json")
    except Exception as e:
        output = {"error":str(e)}
        return HttpResponse(json.dumps(output), content_type="application/json")
    
@csrf_exempt
def IndianKanonDoc(request):
    try:
        if request.method == "POST":
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            query = body["query"]
            docId = body["docId"]
            url = "https://indiankanoon.org/docfragment/"+docId+"/?big=3&formInput="+query
            response = requests.request("GET", url)
            soup = BeautifulSoup(response.text, "html.parser")
            try:
                expanded_headline = soup.find("div",{"class":"expanded_headline"})
                for ad_doc in expanded_headline.find_all("div",{"class":"ad_doc"}):
                    ad_doc.decompose()
                data = {"data":expanded_headline.prettify()}
            except:
                try:
                    judgement = soup.find("div",{"class":"judgments"})
                    for ad_doc in judgement.find_all("div",{"class":"ad_doc"}):
                        ad_doc.decompose()
                    data = {"data":judgement.prettify()}
                except:
                    data = {"data":"There was an error in fetching the document"}
            output = data
            return HttpResponse(json.dumps(output), content_type="application/json")
        else:
            output = {"error":"Method not allowed"}
            return HttpResponse(json.dumps(output), content_type="application/json")
    except Exception as e:
        output = {"error":str(e)}
        return HttpResponse(json.dumps(output), content_type="application/json")
    
@csrf_exempt
def gpt(request):
    try:
        if request.method == "POST":
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            query = body["query"]
            
            instruction = "Give a precise and accurate answer to client in easy to understand language about:\n\n {text}"
            template = get_prompt(instruction)
            print(template.replace("{text}", query))

            def generate_response():
                output = ""
                for text in llm(template.replace("{text}", query), stream=True):
                    print(text, end="", flush=True)
                    yield text
            response = StreamingHttpResponse(generate_response())
            response['Content-Type'] = 'text/event-stream'
            return response
        else:
            output = {"error":"Method not allowed"}
            return HttpResponse(json.dumps(output), content_type="application/json")
    except Exception as e:
        output = {"error":str(e)}
        return HttpResponse(json.dumps(output), content_type="application/json")


def generate_responseChatGPT(prompt):
    global apiKeys
    openai.api_key ="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" #random.choice(apiKeys)
    tempCount = 0
    while tempCount < 3:
        try:
            if len(prompt)>1500:
                for chunk in openai.ChatCompletion.create(model="gpt-3.5-turbo-16k",messages=[{"role": "system", "content": "Your are LawGPT. LawGPT is a virtual legal assistant trained on a massive dataset of legal text and code. It can answer legal questions, generate legal documents, and provide legal advice in a conversational manner."},{"role": "user", "content": prompt}],stream=True):
                    if chunk["choices"][0]["finish_reason"] != "stop":
                        output = chunk["choices"][0]["delta"]["content"]
                        print(output, end="", flush=True)
                        yield output
                tempCount = 4
            else:
                tempPrompt = "Context: Your are LawGPT. LawGPT is a virtual legal assistant.\nQuestion:\n" + prompt + "\nAnswer:\n"
                for chunk in openai.Completion.create(model="gpt-3.5-turbo-instruct",prompt=tempPrompt,max_tokens=2500,stream=True):
                    output = chunk["choices"][0]["text"]
                    yield output
            tempCount = 4
        except Exception as e:
            tempCount += 1
            # openai.api_key = random.choice(apiKeys)
            print("ChatGPT not working", tempCount)
            print(e)
            if tempCount == 3:
                yield "ChatGPT not working"

@csrf_exempt
def chatGPT(request):
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        prompt = body["prompt"]
        openai.api_key = random.choice(apiKeys)
        return StreamingHttpResponse(generate_responseChatGPT(prompt))

@csrf_exempt
def gptGoogle(request):
    global clarityWorking, googleApiWorking
    try:
        if request.method == "POST":
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            query = body["query"]
            context = body["context"]
            try:
                if context != "":
                    prompt = "Context : \n"+context+"\n\nProvide a Answer in Html only.\n Instruction : "+query + "\n Answer : "
                else:
                    prompt = "Provide a Answer in Html only.\n Instruction : "+query + "\n Answer : "
            except:
                prompt = "Provide a professional Answer to the Instructions using basic Html only.\n Instruction : "+query + "\n Answer : "
            if googleApiWorking:
                url = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=AIzaSyDvljNyAfm2x83ZZpSFTNJrw0dQJf14030"

                payload = json.dumps({
                    "prompt": {
                        "text": prompt
                    },
                    "temperature": 0.7,
                    "top_k": 40,
                    "top_p": 0.95,
                    "candidate_count": 1,
                    "max_output_tokens": 8196,
                    "stop_sequences": []
                })
                headers = {
                    'Content-Type': 'application/json'
                }

                try:
                    response = requests.request("POST", url, headers=headers, data=payload)
                    output = response.json()["candidates"][0]["output"]
                    output = output.replace("\n", "<br>").replace("```html","").replace("```", "")
                    print("Generated with Google AI")
                    return HttpResponse(output, content_type="text/plain")
                except:
                    googleApiWorking = False
                    print("Google AI not working")
            if len(apiKeys)>0 and googleApiWorking==False and clarityWorking==False:
                openai.api_key ="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"
                tempCount = 0
                try:
                    while tempCount < 3:
                        try:
                            # openai.api_key = random.choice(apiKeys)
                            # print("Using API key", openai.api_key)
                            if context.strip() != "":
                                completion = openai.ChatCompletion.create(
                                    model="gpt-3.5-turbo-16k",
                                    messages=[
                                        {"role": "system", "content": "Provide a professional Answer to the Instructions using basic Html only"},
                                        {"role": "user", "content": prompt}
                                    ]
                                )
                                output = completion.choices[0].message.content
                                print("Generated with OpenAI ChatGPT")
                            else:
                                tempPrompt = "Question:\n" + query + "\nAnswer:\n"
                                completion = openai.Completion.create(model="gpt-3.5-turbo-instruct",prompt=tempPrompt,max_tokens=3500)
                                output = completion.choices[0].text
                                print("Generated with OpenAI GPT3")
                            output = output.replace("\n", "<br>").replace("```html","").replace("```", "")
                            tempCount = 4
                        except:
                            tempCount += 1
                            print("OpenAI not working for", tempCount)
                    return HttpResponse(output, content_type="text/plain")
                except:
                    print("ChatGPT not working")
                    output = {"error":"None are working"}
                    googleApiWorking = True
                    return HttpResponse(json.dumps(output), content_type="application/json")
        else:
            output = {"error":"Method not allowed"}
            return HttpResponse(json.dumps(output), content_type="application/json")
    except Exception as e:
        output = {"error":str(e)}
        return HttpResponse(json.dumps(output), content_type="application/json")

def getCsrf(request):
    token = get_token(request)
    return HttpResponse(json.dumps({"token":token}), content_type="application/json")

def isAuthenticated(request):
    if request.user.is_authenticated:
        userDetails = {}
        userDetails["first_name"] = request.user.first_name
        userDetails["last_name"] = request.user.last_name
        socialUser = SocialAccount.objects.filter(user=request.user).first()
        if socialUser != None:
            userDetails["info"] = socialUser.extra_data
        return HttpResponse(json.dumps({"isAuthenticated":True,"user":userDetails}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({"isAuthenticated":False}), content_type="application/json")

def apiFetcher(request):
    url = "https://gptlesson1.oss-cn-beijing.aliyuncs.com/meta.json"
    response = requests.get(url, timeout=10)
    apiKeys = response.json()["APIkey"]["keys"]
    return HttpResponse(json.dumps({"apiKeys":apiKeys}), content_type="application/json")

def googleSearch(request):
    query = request.GET.get("query")
    url = "https://www.serphouse.com/wp-admin/admin-ajax.php"

    payload = "f_type=api&action=serp_curl&data[q]="+query+"&data[domain]=google.com&data[loc]=Mumbai,Maharashtra,India&data[lang]=en&data[device]=desktop&data[serp_type]=web&data[page]=1&data[verbatim]=1"
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return HttpResponse(response.text, content_type="application/json")

def getPage(request):
    url = request.GET.get("url")
    try:
        response = requests.request("GET", url)
        soup = BeautifulSoup(response.text, "html.parser")
        text = soup.get_text()
        return HttpResponse(text, content_type="text/plain")
    except:
        return HttpResponse("Error loading page", content_type="text/plain")

@csrf_exempt
def documentList(request):
    try:
        if request.method == "GET":
            documents = Document.objects.filter(user=request.user)
            output = []
            for document in documents:
                created_at = document.created_at.strftime("%d %b %Y")
                updated_at = document.updated_at.strftime("%d %b %Y")
                output.append({"id":document.link,"title":document.title,"content":document.content,"thumbnail":document.thumbnail.url,"created_at":created_at,"updated_at":updated_at})
            return HttpResponse(json.dumps(output), content_type="application/json")
        else:
            output = {"error":"Method not allowed"}
            return HttpResponse(json.dumps(output), content_type="application/json")
    except Exception as e:
        output = {"error":str(e)}
        return HttpResponse(json.dumps(output), content_type="application/json")