import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useAtom } from "jotai";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// Components
import RightSidebar from "./RightSidebar";

// Variables
import { RightSidebarAtom, SidebarWidthAtom, UseChatGPTAtom, GPTContextAtom, ResearchDataAtom } from "../Variables";

const Chat = () => {
    const [sidebar, setSidebar] = useAtom(RightSidebarAtom);
    const [sidebarWidth, setSidebarWidth] = useAtom(SidebarWidthAtom);
    const [textareaInput, setTextareaInput] = useState("");
    const [useChatGPT, setUseChatGPT] = useAtom(UseChatGPTAtom);
    const [GPTContext, setGPTContext] = useAtom(GPTContextAtom);
    const [researchData, setResearchData] = useAtom(ResearchDataAtom);

    async function gptResponse(text) {
        let chatContainer = document.getElementById("chatContainer");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "flex flex-nowrap justify-start items-start w-full gap-5");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", "/static/images/bot.png");
        newImg.setAttribute("alt", "logo");
        newImg.setAttribute("class", "w-10 h-10 bg-slate-200 rounded-lg p-1");
        let newP = document.createElement("p");
        newP.innerHTML = "Loading...";
        newDiv.appendChild(newImg);
        newDiv.appendChild(newP);
        chatContainer.appendChild(newDiv);
        const root = createRoot(newP);
        if (useChatGPT) {
            let contextPromt = text;
            if (researchData.title !== "") {
                let textContext = document.getElementById("KnowledgeContext").innerText;
                contextPromt = "Case Title : " + researchData.title + "\n Headline : \n" + researchData.headline + "\n Case File : \n" + textContext.slice(0, 15000) + "\n\nuse above context to answer the following question : \n" + text;
            }
            const response = await fetch(process.env.REACT_APP_SERVER + "/api/chatGPT", {
                body: JSON.stringify({
                    prompt: contextPromt,
                }),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            document.getElementById("ChatInputParent").style.pointerEvents = "none";
            document.getElementById("chatInput").setAttribute("disabled", "true");
            document.getElementById("ChatInputParent").classList.add("animate-pulse");
            let output = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                const chunk = decoder.decode(value);
                try {
                    // let tempData = JSON.parse("{" + chunk.split("data: {")[1]);
                    // let msg = tempData["message"]["content"]["parts"][0];
                    output += chunk;
                    root.render(<ReactMarkdown children={output} remarkPlugins={[remarkGfm]} />);
                    document.getElementById("chatContainer").parentElement.scrollTo(0, document.getElementById("chatContainer").scrollHeight);
                } catch (e) {}
            }
        } else {
            // process.env.REACT_APP_SERVER + "/gpt"
            const response = await fetch(process.env.REACT_APP_SERVER + "/api/gpt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: text,
                }),
            });
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            document.getElementById("ChatInputParent").style.pointerEvents = "none";
            document.getElementById("chatInput").setAttribute("disabled", "true");
            document.getElementById("ChatInputParent").classList.add("animate-pulse");
            let tempMsg = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                const chunk = decoder.decode(value);
                if (newP.innerHTML !== "Loading...") {
                    tempMsg += chunk;
                    root.render(<ReactMarkdown children={tempMsg} remarkPlugins={[remarkGfm]} />);
                    document.getElementById("chatContainer").parentElement.scrollTo(0, document.getElementById("chatContainer").scrollHeight);
                } else {
                    newP.innerHTML = chunk;
                }
            }
        }
        document.getElementById("ChatInputParent").style.pointerEvents = "all";
        document.getElementById("chatInput").removeAttribute("disabled");
        document.getElementById("ChatInputParent").classList.remove("animate-pulse");
    }

    return (
        <div id="resizebleComponent" className="flex h-screen w-full">
            <div className={"bg-slate-50 relative h-full  "} style={{ width: sidebar ? 100 - sidebarWidth + "%" : "100%" }}>
                {sidebar ? (
                    <></>
                ) : (
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-0 bg-white border border-slate-300 w-7 h-16 rounded-l-lg flex items-center justify-center cursor-pointer hover:w-10 transition-all"
                        onClick={() => {
                            setSidebar(true);
                        }}
                    >
                        <svg fill="currentColor" className="w-5 h-5 text-slate-400" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                )}

                <div className="w-full h-full flex items-start justify-center pt-28 overflow-y-scroll noScroll">
                    <div id="chatContainer" className={"mx-auto flex flex-col gap-5 transition-all duration-300 pb-36 scroll-smooth " + (sidebar ? "w-[90%]" : "w-2/3")}>
                        <div className=" flex flex-nowrap justify-start items-start w-full gap-5">
                            <img src="/static/images/bot.png" alt="logo" className="w-10 h-10 bg-slate-200 rounded-lg p-1" />
                            <p>
                                Welcome to <b>LawGPT</b>, your virtual legal assistant! 📚👩‍⚖️ <br />
                                Whether you have questions about legal matters, need guidance on your rights, or just want to explore the world of law, I'm here to help. Feel free to ask me anything, and I'll do my best to provide you with accurate and informative answers. Let's embark on a journey through the fascinating realm of law together!
                            </p>
                        </div>
                        {/* <div className=" flex flex-row-reverse flex-nowrap justify-start items-center w-full gap-5">
                            <div width="300" height="300" className={"w-10 h-10 bg-primary-600 rounded-lg text-white font-bold text-center p-2"}>
                            JP
                            </div>
                            <p>Hello there, Welcome to LawGPT</p>
                        </div> */}
                    </div>
                </div>
                {/* Input */}
                <div className="w-full h-36 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent absolute bottom-0 left-0"></div>
                <div id="ChatInputParent" className={"absolute bottom-3 left-1/2 -translate-x-1/2 min-w-2/3 transition-all duration-300 " + (sidebar ? "w-[90%]" : "w-2/3")}>
                    {/* Last Messages */}
                    <div
                        id="lastMessages"
                        className="max-h-[200px] h-fit max-w-[300px] w-[300px] scale-y-0 opacity-0 origin-bottom-left bg-white rounded-xl border border-slate-200 absolute bottom-full mb-3 transition-all duration-300"
                        onMouseLeave={() => {
                            document.getElementById("lastMessages").classList.add("scale-y-0");
                            document.getElementById("lastMessages").classList.add("opacity-0");
                        }}
                    >
                        <div className="p-3 py-2 border-b border-slate-200 flex flex-nowrap items-center justify-between">
                            <p className="text-slate-400 font-semibold">Last Messages</p>
                            <svg className="w-5 h-5 text-slate-400 hover:text-primary-500 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                                <path d="M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z" />
                            </svg>
                        </div>
                        <ul className="text-slate-400 p-3 py-2 max-h-[150px] h-fit overflow-y-scroll noScroll">
                            <li className="mb-2">Something 1</li>
                            <li className="my-2">Something 2</li>
                            <li className="my-2">Something 2</li>
                            <li className="my-2">Something 2</li>
                            <li className="my-2">Something 2</li>
                            <li className="mt-2">Something 3</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 px-5 py-3 pt-4 relative">
                        <div
                            className="absolute top-1/2 -translate-y-1/2 left-5"
                            onMouseEnter={() => {
                                document.getElementById("lastMessages").classList.remove("scale-y-0");
                                document.getElementById("lastMessages").classList.remove("opacity-0");
                            }}
                        >
                            <svg fill="currentColor" className="h-5 w-5 text-slate-400 hover:text-primary-500 cursor-pointer -rotate-90" viewBox="10 8 13 8" xmlns="http://www.w3.org/2000/svg">
                                <polyline
                                    points="18 9 21 12 18 15"
                                    style={{
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                    }}
                                />
                                <polyline
                                    points="13 9 16 12 13 15"
                                    style={{
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                    }}
                                />
                            </svg>
                        </div>
                        {/* InputBox */}
                        <div className="w-full">
                            <textarea
                                id="chatInput"
                                onKeyUp={(event) => {
                                    if (textareaInput != "") {
                                        if ((event.code === "Enter" || event.code === "NumpadEnter") && !event.shiftKey) {
                                            const chatContainer = document.getElementById("chatContainer");
                                            const newDiv = document.createElement("div");
                                            newDiv.setAttribute("class", "flex flex-row-reverse flex-nowrap justify-start items-start w-full gap-5 bg-slate-100/75 p-4 rounded-xl shadow-inner");
                                            const innerDiv = document.createElement("div");
                                            innerDiv.setAttribute("height", "300");
                                            innerDiv.setAttribute("width", "300");
                                            innerDiv.setAttribute("class", "w-10 h-10 bg-primary-600 rounded-lg text-white font-bold text-center p-2");
                                            innerDiv.innerText = "JP";
                                            const msg = document.createElement("p");
                                            msg.innerText = document.getElementById("chatInput").value;
                                            newDiv.appendChild(innerDiv);
                                            newDiv.appendChild(msg);
                                            chatContainer.appendChild(newDiv);
                                            document.getElementById("chatContainer").parentElement.scrollTo(0, document.getElementById("chatContainer").scrollHeight);
                                            gptResponse(document.getElementById("chatInput").value);

                                            document.getElementById("chatInput").value = "";
                                        }
                                    }
                                    document.getElementById("chatInput").style.height = "auto";
                                    if (document.getElementById("chatInput").scrollHeight < 200) {
                                        document.getElementById("chatInput").style.height = document.getElementById("chatInput").scrollHeight + "px";
                                    } else {
                                        document.getElementById("chatInput").style.height = "200px";
                                    }
                                }}
                                onChange={(event) => {
                                    setTextareaInput(event.currentTarget.value);
                                }}
                                rows={1}
                                placeholder="Type your message here..."
                                className="w-full resize-none outline-none focus:outline-none pl-9 pr-5 text-slate-600 placeholder:text-slate-400 noScroll"
                            />
                        </div>
                        {/* Send */}
                        <div
                            className="absolute right-5 top-1/2 -translate-y-1/2"
                            onClick={() => {
                                const chatContainer = document.getElementById("chatContainer");
                                const newDiv = document.createElement("div");
                                newDiv.setAttribute("class", "flex flex-row-reverse flex-nowrap justify-start items-start w-full gap-5 bg-slate-100/75 p-4 rounded-xl shadow-inner");
                                const innerDiv = document.createElement("div");
                                innerDiv.setAttribute("height", "300");
                                innerDiv.setAttribute("width", "300");
                                innerDiv.setAttribute("class", "w-10 h-10 bg-primary-600 rounded-lg text-white font-bold text-center p-2");
                                innerDiv.innerText = "JP";
                                const msg = document.createElement("p");
                                msg.innerText = document.getElementById("chatInput").value;
                                newDiv.appendChild(innerDiv);
                                newDiv.appendChild(msg);
                                chatContainer.appendChild(newDiv);
                                document.getElementById("chatContainer").parentElement.scrollTo(0, document.getElementById("chatContainer").scrollHeight);
                                gptResponse(document.getElementById("chatInput").value);

                                document.getElementById("chatInput").value = "";
                            }}
                        >
                            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-slate-400 hover:text-primary-500 cursor-pointer" strokeWidth={2}>
                                <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    {/* Tagline */}
                    <div className="w-full text-center mt-3">
                        <p className="text-slate-400 text-sm">
                            Made With Love By <span className="text-primary-500 font-bold text-base">Dreamers</span>.
                        </p>
                    </div>
                </div>
            </div>
            <RightSidebar />
        </div>
    );
};

export default Chat;
