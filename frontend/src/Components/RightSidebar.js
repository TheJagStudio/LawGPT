import React, { useState } from "react";
import { useAtom } from "jotai";

// Variables
import { RightSidebarAtom, SidebarWidthAtom, GPTContextAtom, ResearchDataAtom } from "../Variables";

// Components
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";

const RightSidebar = () => {
    const [sidebar, setSidebar] = useAtom(RightSidebarAtom);
    const [sidebarWidth, setSidebarWidth] = useAtom(SidebarWidthAtom);
    const [activeTab, setActiveTab] = useState("Research");
    const [googleSearch, setGoogleSearch] = useState("");
    const [googleResults, setGoogleResults] = useState([]);
    const [iKanoonSearch, setIKanoonSearch] = useState("");
    const [iKanoonResults, setIKanoonResults] = useState([]);
    const [iKanoonSuggest, setIKanoonSuggest] = useState([]);
    const [GPTContext, setGPTContext] = useAtom(GPTContextAtom);
    const [researchData, setResearchData] = useAtom(ResearchDataAtom);
    const delayTimeOut = undefined;

    function handleMouseMove(e) {
        if (100 - (e.clientX / window.innerWidth) * 100 > 50) {
            setSidebarWidth(50);
        } else if (100 - (e.clientX / window.innerWidth) * 100 < 20) {
            setSidebarWidth(20);
        } else {
            setSidebarWidth(100 - (e.clientX / window.innerWidth) * 100);
        }
    }
    function handleMouseUp() {
        window.removeEventListener("mousemove", handleMouseMove);
    }
    return (
        <div className={"bg-slate-100 relative h-screen max-h-screen overflow-y-scroll noScroll overflow-hidden pt-20 px-4 " + (sidebar ? "" : "hidden")} style={{ width: sidebar ? sidebarWidth + "%" : "0" }}>
            <div
                onMouseDown={() => {
                    window.addEventListener("mousemove", handleMouseMove);
                    window.addEventListener("mouseup", handleMouseUp);
                }}
                className="h-full w-2 absolute top-0 left-0 bg-slate-100 hover:bg-slate-200 transition-all cursor-[ew-resize] flex items-center justify-center group"
            >
                <div className="w-[80%] h-7 rounded-full bg-slate-300 group-hover:bg-transparent ml-1"></div>
            </div>
            <div className="w-full flex items-center justify-between mb-4">
                <ul className="flex items-center gap-2">
                    <TabNavItem title="Research" id="Research" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Knowledge" id="Knowledge" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNavItem title="Google" id="Google" activeTab={activeTab} setActiveTab={setActiveTab} />
                </ul>
                <svg
                    fill="currentColor"
                    className="w-5 h-5 text-slate-600 cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={() => {
                        setSidebar(false);
                    }}
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </div>
            <TabContent id="Research" activeTab={activeTab}>
                <div className="w-full relative">
                    <svg fill="currentColor" className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                    </svg>
                    <input
                        value={iKanoonSearch}
                        onChange={(event) => {
                            setIKanoonSearch(event.target.value);
                            if (event.target.value !== "") {
                                try {
                                    clearTimeout(window.delayTimeOut);
                                } catch (err) {}
                                window.delayTimeOut = setTimeout(() => {
                                    var myHeaders = new Headers();
                                    myHeaders.append("Content-Type", "application/json");

                                    var raw = JSON.stringify({
                                        query: iKanoonSearch,
                                    });

                                    var requestOptions = {
                                        method: "POST",
                                        headers: myHeaders,
                                        body: raw,
                                        redirect: "follow",
                                    };

                                    fetch(process.env.REACT_APP_SERVER + "/api/ikrecommend", requestOptions)
                                        .then((response) => response.json())
                                        .then((result) => {
                                            setIKanoonSuggest([...result, { label: event.target.value, value: event.target.value }]);
                                        })
                                        .catch((error) => {
                                            setIKanoonSuggest([]);
                                        });
                                    clearTimeout(delayTimeOut);
                                }, 1500);
                            } else {
                                setIKanoonSuggest([]);
                                setIKanoonResults([]);
                                clearTimeout(delayTimeOut);
                            }
                        }}
                        placeholder="Search Case Files"
                        className="w-full bg-white border border-slate-300 rounded-md p-2 px-4 pl-10 outline-none focus:outline-none placeholder:text-slate-400 text-slate-400"
                    />
                    {iKanoonSuggest.length > 0 && (
                        <div className="absolute top-12 left-0 w-full h-fit bg-white shadow rounded-lg text-slate-600 overflow-hidden">
                            {iKanoonSuggest.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setIKanoonSearch(item.value);
                                            setIKanoonSuggest([]);
                                            var myHeaders = new Headers();
                                            myHeaders.append("Content-Type", "application/json");

                                            var raw = JSON.stringify({
                                                query: item.value,
                                            });

                                            var requestOptions = {
                                                method: "POST",
                                                headers: myHeaders,
                                                body: raw,
                                                redirect: "follow",
                                            };

                                            fetch(process.env.REACT_APP_SERVER + "/api/iksearch", requestOptions)
                                                .then((response) => response.json())
                                                .then((result) => {
                                                    setIKanoonResults(result);
                                                })
                                                .catch((error) => console.log("error", error));
                                        }}
                                        dangerouslySetInnerHTML={{ __html: item.label }}
                                        className="py-1 px-3 border-b border-slate-300 last:border-transparent cursor-pointer hover:bg-slate-100"
                                    ></div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="h-full w-full my-2 flex flex-col gap-3 pb-5">
                    {iKanoonResults.map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    var myHeaders = new Headers();
                                    myHeaders.append("Content-Type", "application/json");

                                    var raw = JSON.stringify({
                                        query: iKanoonSearch,
                                        docId: item.docUrl.split("/").at(-2),
                                    });

                                    var requestOptions = {
                                        method: "POST",
                                        headers: myHeaders,
                                        body: raw,
                                        redirect: "follow",
                                    };

                                    fetch(process.env.REACT_APP_SERVER + "/api/ikdoc", requestOptions)
                                        .then((response) => response.json())
                                        .then((result) => {
                                            setGPTContext(result.data);
                                            setResearchData(item);
                                            setActiveTab("Knowledge");
                                        })
                                        .catch((error) => console.log("error", error));
                                }}
                                key={index}
                                className="w-full bg-slate-200/50 border border-slate-300 p-3 rounded-lg hover:border-primary-600 hover:bg-primary-100 cursor-pointer group"
                            >
                                <p className="text-slate-600 font-semibold group-hover:text-primary-700">{item.title}</p>
                                <p className="text-slate-400 text-xs">{item.headline}</p>
                                <p className="text-slate-500 text-xs font-bold">Source : {item.docsource}</p>
                            </div>
                        );
                    })}
                </div>
            </TabContent>
            <TabContent id="Knowledge" activeTab={activeTab}>
                <div className="h-full w-full">
                    <p className="font-bold text-xl text-slate-600 mb-4">{researchData?.title}</p>
                    <p className="text-slate-500 text-sm mb-4">{researchData?.headline}</p>
                    <p className="text-slate-500 text-xs font-bold">{researchData?.docsource ? "Source : " + researchData.docsource : ""}</p>
                    <div id="KnowledgeContext" className="border-t-2 border-primary-300 mt-3 pt-2 text-slate-600" dangerouslySetInnerHTML={{ __html: GPTContext }}></div>
                </div>
            </TabContent>
            <TabContent id="Google" activeTab={activeTab}>
                <div className="w-full relative">
                    <svg fill="currentColor" className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input
                        value={googleSearch}
                        onChange={(event) => {
                            setGoogleSearch(event.target.value);
                            try {
                                clearTimeout(window.delayTimeOut);
                            } catch (err) {}
                            window.delayTimeOut = setTimeout(() => {
                                document.getElementById("googleSearchContainer").classList.add("animate-pulse");
                                var requestOptions = {
                                    method: "GET",
                                    redirect: "follow",
                                };

                                fetch("/api/googleSearch?query=" + event.target.value, requestOptions)
                                    .then((response) => response.json())
                                    .then((result) => {
                                        console.log(result);
                                        setGoogleResults(result["data"]["json"]["results"]["organic"]);
                                        document.getElementById("googleSearchContainer").classList.remove("animate-pulse");
                                    })
                                    .catch((error) => {
                                        console.log("error", error);
                                        document.getElementById("googleSearchContainer").classList.remove("animate-pulse");
                                    });
                            }, 1500);
                        }}
                        placeholder="Search Google"
                        className="w-full bg-white border border-slate-300 rounded-md p-2 px-4 pl-10 outline-none focus:outline-none placeholder:text-slate-400 text-slate-400"
                    />
                </div>
                <div id="googleSearchContainer" className="h-full w-full my-2 flex flex-col gap-3 pb-5 scroll-smooth">
                    {googleResults.map((item, index) => {
                        return (
                            <div key={index} id={"search" + index} className="w-full bg-slate-200/50 border border-slate-300 hover:border-primary-500 p-3 rounded-lg flex items-start gap-3 transition-all duration-300">
                                <img src={"https://s2.googleusercontent.com/s2/favicons?domain_url=" + item.link} alt="Google Logo" className="w-5 h-5 object-cover rounded mt-1" />
                                <div className="w-[calc(96%-20px-2rem)] ">
                                    <p
                                        onClick={() => {
                                            var requestOptions = {
                                                method: "GET",
                                                redirect: "follow",
                                            };

                                            fetch("/api/getPage?url=" + item.link, requestOptions)
                                                .then((response) => response.text())
                                                .then((result) => {
                                                    setGPTContext(result);
                                                    setResearchData({
                                                        docUrl: item.link,
                                                        docsource: "Google",
                                                        headline: item.snippet,
                                                        title: item.title,
                                                    });
                                                    setActiveTab("Knowledge");
                                                })
                                                .catch((error) => console.log("error", error));
                                        }}
                                        className="text-slate-500 font-semibold truncate cursor-pointer"
                                    >
                                        {item.title}
                                    </p>
                                    <p
                                        onClick={() => {
                                            window.open(item.link, "_blank");
                                        }}
                                        className="w-full text-slate-400 text-sm truncate cursor-pointer"
                                    >
                                        {item.link}
                                    </p>
                                    <p className="w-full text-slate-600 text-sm">{item.snippet}</p>
                                </div>
                                <div
                                    onClick={() => {
                                        document.getElementById("search" + index).classList.add("scale-0");
                                        setTimeout(() => {
                                            document.getElementById("search" + index).classList.add("hidden");
                                        }, 300);
                                    }}
                                    className="w-6 h-6 border border-primary-400 bg-primary-300/25 rounded-md flex items-center justify-center"
                                    title="Remove"
                                >
                                    <svg fill="currentColor" className=" text-primary-600 cursor-pointer p-1 " viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </TabContent>
        </div>
    );
};

export default RightSidebar;
