import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import MUIRichTextEditor, { TToolbarComponentProps } from "mui-rte";
import { useAtom } from "jotai";
import { EditorFontFamilyAtom, EditorFontStyleAtom } from "../Variables";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// Components
import TabContent from "../Components/TabContent";

const myTheme = createTheme({});

const placeholderArr = ["Caption a social post to promote an up-and-coming female jazz musician", "Summarise this document", "How-to guide for operating a lawn mower", "Farewell email for a teacher who's been at the school for 25 years", "Plan a birthday party for a year 9 student. Include a table with activity ideas and a to-do list", "Create a title for this document", "Create an invoice template", "Write a 100 word email asking for a raise", "Interview thank you letter", "Plan a trip to Bologna and Cinque Terre with table of activity ideas and details", "Poem called: 'The Lonely Bird'. Include 'I love to sing'", "Newspaper ad for a car auction", "Formal invitation to teach history at a university", "Plan a PTA event teaching children how to be kind and helpful", "Example CV for a brand marketing manager", "Letter to my landlord about water leaking from the sink", "Description of a new line of organic cotton teddy bears", "Create a table of the top weekend Paris tourist destinations (address, opening hours)", "Cover letter for a secondary school maths teacher job", "Recommendation letter for my teammate applying to a postgraduate programme", "Write an event plan for a summit on tech design", "Recipe for beef wellington", "Write a song about a first love", "Email to my child's headteacher about an upcoming family holiday", "Pitch for a product that allows people to create holograms of themselves"];

const FontFamilyBlock = (props) => {
    const [fontFamily, setFontFamily] = useAtom(EditorFontFamilyAtom);
    return <div className={"font-" + fontFamily}>{props.children}</div>;
};
const FontStylesBlock = (props) => {
    const [fontStyles, setFontStyles] = useAtom(EditorFontStyleAtom);
    return <div className={"size-" + fontStyles}>{props.children}</div>;
};

const FontFamily = (props) => {
    const [fontFamily, setFontFamily] = useAtom(EditorFontFamilyAtom);
    return (
        <button
            id={props.id}
            onClick={() => {
                document.getElementById("dropdown" + props.id).classList.toggle("hidden");
                document.getElementById("arrow" + props.id).classList.toggle("rotate-180");
            }}
            disabled={props.disabled}
            className="!w-28 z-50 h-full translate-y-0.5 text-white bg-primary-50 hover:bg-primary-300 focus:ring-0 focus:outline-none focus:ring-none font-medium rounded-full text-sm text-center inline-flex items-center relative "
            type="button"
        >
            <span className="px-2 w-24 truncate">{fontFamily}</span>
            <svg id={"arrow" + props.id} className="w-2 h-2 ml-2.5 text-primary-600 transition-all " viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37 18L25 30L13 18" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div id={"dropdown" + props.id} className="hidden absolute top-10 bg-primary-50 rounded-lg shadow w-max">
                <ul className="py-2 text-sm text-gray-700">
                    <li
                        onClick={() => {
                            setFontFamily("Times");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Times New Roman
                    </li>
                    <li
                        onClick={() => {
                            setFontFamily("Arial");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Arial
                    </li>
                    <li
                        onClick={() => {
                            setFontFamily("Calibri");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Calibri
                    </li>
                    <li
                        onClick={() => {
                            setFontFamily("Inter");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Inter
                    </li>
                    <li
                        onClick={() => {
                            setFontFamily("Poppins");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Poppins
                    </li>
                </ul>
            </div>
        </button>
    );
};
const FontStyles = (props) => {
    const [fontStyles, setFontStyles] = useAtom(EditorFontStyleAtom);
    return (
        <button
            id={props.id}
            onClick={() => {
                document.getElementById("dropdown" + props.id).classList.toggle("hidden");
                document.getElementById("arrow" + props.id).classList.toggle("rotate-180");
            }}
            disabled={props.disabled}
            className="!w-28 z-50 h-full translate-y-0.5 text-white bg-primary-50 hover:bg-primary-300 focus:ring-0 focus:outline-none focus:ring-none font-medium rounded-full text-sm text-center inline-flex items-center relative "
            type="button"
        >
            <span className="px-2 w-24 truncate">{fontStyles}</span>
            <svg id={"arrow" + props.id} className="w-2 h-2 ml-2.5 text-primary-600 transition-all " viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37 18L25 30L13 18" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div id={"dropdown" + props.id} className="hidden absolute top-10 bg-primary-50 rounded-lg shadow w-max">
                <ul className="py-2 text-sm text-gray-700">
                    <li
                        onClick={() => {
                            setFontStyles("Normal");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Normal
                    </li>
                    <li
                        onClick={() => {
                            setFontStyles("Title");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Title
                    </li>
                    <li
                        onClick={() => {
                            setFontStyles("Subtitle");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Subtitle
                    </li>
                    <li
                        onClick={() => {
                            setFontStyles("Heading-1");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Heading-1
                    </li>
                    <li
                        onClick={() => {
                            setFontStyles("Heading-2");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Heading-2
                    </li>
                    <li
                        onClick={() => {
                            setFontStyles("Heading-3");
                        }}
                        onMouseDown={props.onMouseDown}
                        className="block px-4 py-2 hover:bg-primary-100"
                    >
                        Heading-3
                    </li>
                </ul>
            </div>
        </button>
    );
};

const content = '{"blocks":[{"key":"7po5","text":"My Title","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"apv19","text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi:","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":192,"length":16,"style":"UNDERLINE"},{"offset":261,"length":21,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"5sea5","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"57hbe","text":"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","type":"blockquote","depth":0,"inlineStyleRanges":[{"offset":34,"length":17,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"9ijl2","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"98bf8","text":"print(\\"OK\\")","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"al2ij","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d4no","text":"Visit this link!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":6,"length":9,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://github.com/niuware"}}}}';

const DocumentWriter = () => {
    const [aiChatInput, setAiChatInput] = useState("");
    const [activeTab, setActiveTab] = useState("Question");
    const [aiAnswer, setAiAnswer] = useState("");
    useEffect(() => {
        const placeholderInterval = setInterval(() => {
            try {
                document.getElementById("aiChatInput").setAttribute("placeholder", placeholderArr[Math.floor(Math.random() * placeholderArr.length)]);
            } catch (e) {}
        }, 5000);
    }, []);
    return (
        <div id="docMain" className="w-full p-5 bg-[#f9fbfd] min-h-screen relative">
            <TabContent id="Question" activeTab={activeTab}>
                <div id="helpMeWriteContainer" className="p-4 bg-gradient-to-tr from-primary-200 to-primary-100  top-0 left-0 -translate-x-1/2 -translate-y-1/2 fixed ml-[50vw] mt-[50vh] w-1/2 h-fit rounded-lg shadow-xl shadow-primary-100/25 z-[60] transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-nowrap gap-2 items-start justify-start">
                            <svg viewBox="0 -0.11 33.736 33.736" className="w-5 h-5 text-gray-500">
                                <path d="M1.001 33.519a1 1 0 0 1-.528-1.85c.141-.088 14.151-8.859 17.653-17.833a1 1 0 0 1 1.863.727c-3.745 9.6-17.863 18.434-18.462 18.8a.993.993 0 0 1-.526.156Z" />
                                <path d="m4.274 30.674-.017-1.09a28.119 28.119 0 0 1 4.178-14.957l.3-.441h3.806l-.923-2.983.293-.4C17.522 3.069 27.203.695 31.105.033a2.261 2.261 0 0 1 2.621 2.408c-1.791 25.095-28.105 28.1-28.371 28.125Zm5.547-14.488a26.983 26.983 0 0 0-3.554 12.23c4.909-.811 23.983-5.3 25.469-26.121a.275.275 0 0 0-.09-.232.224.224 0 0 0-.2-.06c-3.59.608-12.393 2.752-17.614 9.575l.776 2.529a1.607 1.607 0 0 1-1.536 2.079Z" />
                            </svg>
                            <p className="text-slate-800">Help me write</p>
                        </div>
                        <div>
                            <svg className="w-4 h-4 text-gray-500 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                    <textarea
                        id="aiChatInput"
                        className="w-full h-20 p-2 mt-2 text-sm text-slate-800 placeholder:text-slate-600/75 bg-transparent border-none rounded-lg resize-none focus:outline-none focus:ring-0 focus:border-primary-600"
                        placeholder="Type here..."
                        onChange={(event) => {
                            setAiChatInput(event.target.value);
                            if (event.target.value.length > 0) {
                                document.getElementById("aiSubmitBtn").classList.remove("opacity-25");
                                document.getElementById("aiSubmitBtn").classList.remove("bg-primary-400");
                                document.getElementById("aiSubmitBtn").classList.remove("cursor-not-allowed");
                                document.getElementById("aiSubmitBtn").classList.add("bg-primary-100");
                                document.getElementById("aiSubmitBtn").classList.add("cursor-pointer");
                            } else {
                                document.getElementById("aiSubmitBtn").classList.add("opacity-25");
                                document.getElementById("aiSubmitBtn").classList.add("bg-primary-400");
                                document.getElementById("aiSubmitBtn").classList.add("cursor-not-allowed");
                                document.getElementById("aiSubmitBtn").classList.remove("bg-primary-100");
                                document.getElementById("aiSubmitBtn").classList.remove("cursor-pointer");
                            }
                        }}
                        value={aiChatInput}
                        onFocus={() => {
                            document.getElementById("helpMeWriteContainer").classList.remove("from-primary-200");
                            document.getElementById("helpMeWriteContainer").classList.remove("to-primary-100");
                            document.getElementById("helpMeWriteContainer").classList.add("from-primary-100");
                            document.getElementById("helpMeWriteContainer").classList.add("to-primary-50");
                        }}
                        onBlur={() => {
                            document.getElementById("helpMeWriteContainer").classList.add("from-primary-200");
                            document.getElementById("helpMeWriteContainer").classList.add("to-primary-100");
                            document.getElementById("helpMeWriteContainer").classList.remove("from-primary-100");
                            document.getElementById("helpMeWriteContainer").classList.remove("to-primary-50");
                        }}
                    ></textarea>
                    <div className="w-full flex justify-end">
                        <div
                            onClick={() => {
                                if (aiChatInput !== "") {
                                    setActiveTab("Skeleton");
                                    var myHeaders = new Headers();
                                    myHeaders.append("Content-Type", "application/json");

                                    var raw = JSON.stringify({
                                        query: aiChatInput,
                                    });

                                    var requestOptions = {
                                        method: "POST",
                                        headers: myHeaders,
                                        body: raw,
                                        redirect: "follow",
                                    };

                                    fetch(process.env.REACT_APP_SERVER + "/api/gptSuggest", requestOptions)
                                        .then((response) => response.text())
                                        .then((result) => {
                                            setAiAnswer(result);
                                            setActiveTab("Answer");
                                        })
                                        .catch((error) => console.log("error", error));
                                }
                            }}
                            id="aiSubmitBtn"
                            className="bg-primary-400 opacity-25 p-1 px-4 rounded-full border border-primary-600 text-primary-600 font-semibold transition-all cursor-not-allowed"
                        >
                            Create
                        </div>
                    </div>
                </div>
            </TabContent>
            <TabContent id="Skeleton" activeTab={activeTab}>
                <div className="p-4 bg-gradient-to-tr from-primary-200 to-primary-100  top-0 left-0 -translate-x-1/2 -translate-y-1/2 fixed ml-[50vw] mt-[50vh] w-1/2 h-fit rounded-lg shadow-xl shadow-primary-100/25 z-[60] transition-all duration-300">
                    <div className="animate-pulse">
                        <div className="flex flex-nowrap items-center gap-3">
                            <div className="bg-primary-300 w-7 h-7 rounded-md skeleton-animation [animation-delay:0s_!important]"></div>
                            <div className="bg-primary-300 w-64 h-4 rounded-full skeleton-animation [animation-delay:0.5s_!important]"></div>
                        </div>
                        <div className="bg-primary-300 w-[20%] h-4 rounded-full mt-4 skeleton-animation [animation-delay:1s_!important]"></div>
                        <div className="bg-primary-300 w-full h-4 rounded-full mt-3 skeleton-animation [animation-delay:1.5s_!important]"></div>
                        <div className="flex flex-nowrap items-center gap-3 mt-2">
                            <div className="bg-primary-300 w-[45%] h-4 rounded-full skeleton-animation [animation-delay:2s_!important]"></div>
                            <div className="bg-primary-300 w-[30%] h-4 rounded-full skeleton-animation [animation-delay:2.5s_!important]"></div>
                            <div className="bg-primary-300 w-[5%] h-4 rounded-full skeleton-animation [animation-delay:3s_!important]"></div>
                            <div className="bg-primary-300 w-[20%] h-4 rounded-full skeleton-animation [animation-delay:3.5s_!important]"></div>
                        </div>
                        <div className="flex flex-nowrap items-center gap-3 mt-2">
                            <div className="bg-primary-300 w-[35%] h-4 rounded-full skeleton-animation [animation-delay:4s_!important]"></div>
                            <div className="bg-primary-300 w-[75%] h-4 rounded-full skeleton-animation [animation-delay:4.5s_!important]"></div>
                        </div>
                        <div className="bg-primary-300 w-full h-4 rounded-full mt-3 skeleton-animation [animation-delay:5s_!important]"></div>
                        <div className="flex flex-nowrap items-center gap-3 mt-6">
                            <div className="bg-primary-300 w-[20%] h-4 rounded-full skeleton-animation [animation-delay:5.5s_!important]"></div>
                            <div className="bg-primary-300 w-[30%] h-4 rounded-full skeleton-animation [animation-delay:6s_!important]"></div>
                            <div className="bg-primary-300 w-[40%] h-4 rounded-full skeleton-animation [animation-delay:6.5s_!important]"></div>
                            <div className="bg-primary-300 w-[10%] h-4 rounded-full skeleton-animation [animation-delay:7s_!important]"></div>
                        </div>
                        <div className="flex flex-nowrap items-center gap-3 mt-2">
                            <div className="bg-primary-300 w-[75%] h-4 rounded-full  skeleton-animation [animation-delay:7.5s_!important]"></div>
                            <div className="bg-primary-300 w-[35%] h-4 rounded-full  skeleton-animation [animation-delay:8s_!important]"></div>
                        </div>
                        <div className="bg-primary-300 w-[60%] h-4 rounded-full mt-3 skeleton-animation [animation-delay:8.5s_!important]"></div>
                    </div>
                </div>
            </TabContent>
            <TabContent id="Answer" activeTab={activeTab}>
                <div id="helpMeWriteContainer" className="p-4 bg-gradient-to-tr from-primary-200 to-primary-100  top-0 left-0 -translate-x-1/2 -translate-y-1/2 fixed ml-[50vw] mt-[50vh] w-2/3 h-fit rounded-lg shadow-xl shadow-primary-100/25 z-[60] transition-all duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-primary-900">
                        <div className="flex flex-nowrap gap-2 w-full items-center justify-start hover:bg-primary-300 border-transparent hover:border-primary-600 mr-3 group border transition-all rounded-lg p-2 cursor-pointer">
                            <svg viewBox="0 -0.11 33.736 33.736" className="w-5 h-5 text-gray-500 group-hover:text-primary-800">
                                <path fill="currentColor" d="M1.001 33.519a1 1 0 0 1-.528-1.85c.141-.088 14.151-8.859 17.653-17.833a1 1 0 0 1 1.863.727c-3.745 9.6-17.863 18.434-18.462 18.8a.993.993 0 0 1-.526.156Z" />
                                <path fill="currentColor" d="m4.274 30.674-.017-1.09a28.119 28.119 0 0 1 4.178-14.957l.3-.441h3.806l-.923-2.983.293-.4C17.522 3.069 27.203.695 31.105.033a2.261 2.261 0 0 1 2.621 2.408c-1.791 25.095-28.105 28.1-28.371 28.125Zm5.547-14.488a26.983 26.983 0 0 0-3.554 12.23c4.909-.811 23.983-5.3 25.469-26.121a.275.275 0 0 0-.09-.232.224.224 0 0 0-.2-.06c-3.59.608-12.393 2.752-17.614 9.575l.776 2.529a1.607 1.607 0 0 1-1.536 2.079Z" />
                            </svg>
                            <p className="text-slate-800 w-[calc(100%-2.25rem)]">{aiChatInput}</p>
                        </div>
                        <div>
                            <svg
                                onClick={() => {
                                    setAiChatInput("");
                                    setAiAnswer("");
                                    setActiveTab("Question");
                                }}
                                className="w-4 h-4 text-gray-500 cursor-pointer"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full h-96 overflow-y-scroll my-5 text-slate-700 shadow-inner rounded-lg p-5 bg-primary-200">
                        <ReactMarkdown children={aiAnswer} remarkPlugins={[remarkGfm]} />
                    </div>
                </div>
            </TabContent>
            <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor
                    label="Start typing..."
                    inlineToolbar={true}
                    controls={["undo", "redo", "print", "font-family", "font-style", "bold", "italic", "underline", "link", "numberList", "bulletList", "quote", "code", "clear", "save", "media", "strikethrough", "highlight"]}
                    customControls={[
                        {
                            name: "font-family",
                            component: FontFamily,
                            type: "block",
                            blockWrapper: <FontFamilyBlock />,
                        },
                        {
                            name: "font-style",
                            component: FontStyles,
                            type: "block",
                            blockWrapper: <FontStylesBlock />,
                        },
                        {
                            name: "print",
                            icon: <LocalPrintshopIcon />,
                            type: "callback",
                            onClick: (editorState, name, anchor) => {
                                window.print();
                            },
                        },
                    ]}
                />
            </ThemeProvider>
        </div>
    );
};

export default DocumentWriter;
