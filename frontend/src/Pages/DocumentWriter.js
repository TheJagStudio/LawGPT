import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { DocumentDataAtom } from "../Variables.js";

import { Editor } from "@tinymce/tinymce-react";
import html2canvas from "html2canvas";

const placeholderArr = ["Caption a social post to promote an up-and-coming female jazz musician", "Summarise this document", "How-to guide for operating a lawn mower", "Farewell email for a teacher who's been at the school for 25 years", "Plan a birthday party for a year 9 student. Include a table with activity ideas and a to-do list", "Create a title for this document", "Create an invoice template", "Write a 100 word email asking for a raise", "Interview thank you letter", "Plan a trip to Bologna and Cinque Terre with table of activity ideas and details", "Poem called: 'The Lonely Bird'. Include 'I love to sing'", "Newspaper ad for a car auction", "Formal invitation to teach history at a university", "Plan a PTA event teaching children how to be kind and helpful", "Example CV for a brand marketing manager", "Letter to my landlord about water leaking from the sink", "Description of a new line of organic cotton teddy bears", "Create a table of the top weekend Paris tourist destinations (address, opening hours)", "Cover letter for a secondary school maths teacher job", "Recommendation letter for my teammate applying to a postgraduate programme", "Write an event plan for a summit on tech design", "Recipe for beef wellington", "Write a song about a first love", "Email to my child's headteacher about an upcoming family holiday", "Pitch for a product that allows people to create holograms of themselves"];

const DocumentWriter = () => {
    const [aiChatInput, setAiChatInput] = useState("");
    const [activeTab, setActiveTab] = useState("Question");
    const [aiAnswer, setAiAnswer] = useState("");
    const [documentData, setDocumentData] = useAtom(DocumentDataAtom);

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    useEffect(() => {
        window.placeholderInterval = setInterval(() => {
            try {
                document.getElementById("aiChatInput").setAttribute("placeholder", placeholderArr[Math.floor(Math.random() * placeholderArr.length)]);
            } catch (e) {}
        }, 5000);
    }, []);
    return (
        <div id="docMain" className="w-full p-0 max-h-screen relative overflow-hidden">
            <div className="h-6 w-full relative z-[998] bg-white">
                <div className="absolute w-full top-0 left-0">
                    <div className="flex flex-nowrap items-center ">
                        <h1 contentEditable={true} className="text-xl mt-2 ml-14 px-2 max-w-[80%] w-fit font-medium text-slate-800 bg-white focus:outline-none ring-2 ring-offset-2 ring-transparent focus:ring-purple-300 rounded-lg truncate">
                            {documentData.title !== "" ? documentData.title : "Untitled Document"}
                        </h1>
                        <p id="saving" className="hidden flex flex-nowrap items-center text-sm ml-5 mt-2 text-slate-500 font-normal">
                            <svg width={16} height={16} className="mr-2 animate-spin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" path d="M4 12a1 1 0 0 1-2 0 9.983 9.983 0 0 1 16.242-7.794V2.758a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.743A7.986 7.986 0 0 0 4 12Zm17-1a1 1 0 0 0-1 1 7.986 7.986 0 0 1-12.985 6.242h1.742a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.448A9.984 9.984 0 0 0 22 12a1 1 0 0 0-1-1Z" />
                            </svg>
                            Saving...
                        </p>
                    </div>
                    <NavLink to="/document">
                        <svg fill="currentColor" className="w-10 h-10 text-primary-600 hover:scale-110 hover:text-primary-700 absolute top-6 left-2 transition-all" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </NavLink>
                </div>
            </div>
            <div id="Loader" className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[999] bg-white transition-all">
                <iframe className="h-[50vh] w-auto aspect-square" src="https://lottie.host/?file=93b46eaf-7161-4215-86cd-75262e092fa7/YukNYIF8cj.json" />
            </div>
            <div className="w-full overflow-hidden h-screen">
                <div id="htmlContainer" className="absolute top-0 left-0 w-full h-full z-[-1] px-14 bg-white text-justify"></div>
                <Editor
                    apiKey="udrm4kby4ry275f3fzhletnonyr0phdy8ch4f6bp3ajnpoh5"
                    onInit={(evt, editor) => {
                        editorRef.current = editor;
                        document.getElementById("Loader").classList.add("scale-0");
                        setTimeout(() => {
                            document.getElementById("Loader").classList.add("hidden");
                        }, 300);
                    }}
                    onChange={(evt, editor) => {
                        document.getElementById("saving").classList.remove("hidden");
                        // console.log("Content was updated:", editor.getContent());
                        document.getElementById("htmlContainer").innerHTML = editor.getContent();
                        try {
                            html2canvas(document.getElementById("htmlContainer"), {
                                width: 1024,
                                height: 1444,
                            }).then(function (canvas) {
                                let image = canvas.toDataURL("image/png");
                                // document.getElementById("sample").setAttribute("src", image);
                            });
                            setTimeout(() => {
                                document.getElementById("saving").classList.add("hidden");
                            }, 1000);
                        } catch (e) {}
                    }}
                    initialValue={documentData.content !== "" ? documentData.content : "<p>This is the initial content of the editor.</p>"}
                    renderIframe={false}
                    init={{
                        height: "calc(100vh - 1.5rem)",
                        menubar: "file edit insert view format table tools",
                        plugins: ["ai", "preview", "powerpaste", "casechange", "footnotes", "searchreplace", "autolink", "autosave", "save", "directionality", "advcode", "visualblocks", "visualchars", "fullscreen", "image", "link", "media", "mediaembed", "advtemplate", "codesample", "table", "charmap", "pagebreak", "nonbreaking", "anchor", "tableofcontents", "insertdatetime", "advlist", "lists", "checklist", "wordcount", "tinymcespellchecker", "mergetags", "a11ychecker", "editimage", "help", "formatpainter", "permanentpen", "pageembed", "charmap", "quickbars", "linkchecker", "emoticons", "advtable", "export", "mentions", "typography"],
                        toolbar: "undo redo aidialog aishortcuts bold italic underline strikethrough | fontfamily fontsizeinput blocks | forecolor backcolor casechange permanentpen formatpainter removeformat | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist  | pagebreak | charmap emoticons | code fullscreen preview | save print export | insertfile image media pageembed link anchor codesample | addtemplate inserttemplate | typography a11ycheck ltr rtl",
                        content_style: "body { font-family:Arial,sans-serif; font-size:16px;padding:80px; } \nimg{border-radius:10px}",
                        export_ignore_elements: ["iframe", "video", "audio"],
                        ai_shortcuts: [
                            {
                                title: "Legal Docs",
                                subprompts: [
                                    { title: "Affidavits", prompt: "Use this content and below template to create Affidavit Document.\nTemplate:\n# Affidavit\nI, [Your Full Name], residing at [Your Address], do solemnly affirm and declare as follows:\n1. I am over the age of 18 and am of sound mind.\n2. I have personal knowledge of the facts stated herein, and I make this affidavit based on my own personal observations and experiences.\n3. The purpose of this affidavit is to [state the purpose or reason for the affidavit].\n4. [State the relevant facts and details in a numbered list or paragraph format.]\n5. [Add more details or facts as necessary.]\n6. [Continue in the same manner as needed.]\n7. I understand that this affidavit is made under penalty of perjury, and I declare that the statements made herein are true and correct to the best of my knowledge, information, and belief.\nDate: [Date]\nLocation: [City, State]\n   \n[Your Full Name]\n   \n   \nSworn and subscribed to before me on this [Day] day of [Month], [Year], at [City, State].\n[Notary Public's Name]\nNotary Public for [State]\nMy Commission Expires: [Expiration Date]" },
                                    { title: "Casual", prompt: "Rewrite this content with casual, informal language to convey a casual conversation with a real person." },
                                    { title: "Direct", prompt: "Rewrite this content with direct language using only the essential information." },
                                    { title: "Confident", prompt: "Rewrite this content using compelling, optimistic language to convey confidence in the writing." },
                                    { title: "Friendly", prompt: "Rewrite this content using friendly, comforting language, to convey understanding and empathy." },
                                ],
                            },
                            { title: "Summarize content", prompt: "Provide the key points and concepts in this content in a succinct summary." },
                            { title: "Improve writing", prompt: "Rewrite this content with no spelling mistakes, proper grammar, and with more descriptive language, using best writing practices without losing the original meaning." },
                            { title: "Simplify language", prompt: "Rewrite this content with simplified language and reduce the complexity of the writing, so that the content is easier to understand." },
                            { title: "Expand upon", prompt: "Expand upon this content with descriptive language and more detailed explanations, to make the writing easier to understand and increase the length of the content." },
                            { title: "Trim content", prompt: "Remove any repetitive, redundant, or non-essential writing in this content without changing the meaning or losing any key information." },
                            {
                                title: "Change tone",
                                subprompts: [
                                    { title: "Professional", prompt: "Rewrite this content using polished, formal, and respectful language to convey professional expertise and competence." },
                                    { title: "Casual", prompt: "Rewrite this content with casual, informal language to convey a casual conversation with a real person." },
                                    { title: "Direct", prompt: "Rewrite this content with direct language using only the essential information." },
                                    { title: "Confident", prompt: "Rewrite this content using compelling, optimistic language to convey confidence in the writing." },
                                    { title: "Friendly", prompt: "Rewrite this content using friendly, comforting language, to convey understanding and empathy." },
                                ],
                            },
                            {
                                title: "Change style",
                                subprompts: [
                                    { title: "Business", prompt: "Rewrite this content as a business professional with formal language." },
                                    { title: "Legal", prompt: "Rewrite this content as a legal professional using valid legal terminology." },
                                    { title: "Journalism", prompt: "Rewrite this content as a journalist using engaging language to convey the importance of the information." },
                                    { title: "Medical", prompt: "Rewrite this content as a medical professional using valid medical terminology." },
                                    { title: "Poetic", prompt: "Rewrite this content as a poem using poetic techniques without losing the original meaning." },
                                ],
                            },
                        ],
                        ai_request: (request, respondWith) => {
                            var myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");

                            var raw = JSON.stringify({
                                query: request.query,
                                context: request.context,
                            });

                            var requestOptions = {
                                method: "POST",
                                headers: myHeaders,
                                body: raw,
                                redirect: "follow",
                            };
                            respondWith.string((signal) =>
                                window
                                    .fetch(process.env.REACT_APP_SERVER + "/api/gptSuggest", { signal, ...requestOptions })
                                    .then((response) => response.text())
                                    .then((result) => {
                                        result = result.replace(/\/n/g, "<br/>");
                                        return result;
                                    })
                                    .catch((error) => console.log("error", error))
                            );
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default DocumentWriter;
