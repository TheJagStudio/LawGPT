import React from "react";
import { useAtom } from "jotai";
import { DocumentSearchAtom, UserAtom } from "../Variables.js";
import { NavLink } from "react-router-dom";

const DocNavbar = () => {
    const [documentSearch, setDocumentSearch] = useAtom(DocumentSearchAtom);
    const [user, setUser] = useAtom(UserAtom);
    return (
        <nav className="fixed top-0 left-0 flex items-center justify-center h-16 py-3 px-5 border-b text-sm w-full z-50 bg-white shadow-xl shadow-slate-100/25">
            <div className="max-w-6xl w-full h-full flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
                    {/* <svg fill="currentColor" className="w-10 h-10 text-primary-600" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                    </svg> */}
                    <svg fill="currentColor" className="w-10 h-10 text-primary-600" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <p className="text-primary-600 font-semibold text-xl">DocX</p>
                </NavLink>
                <div className="flex items-center justify-center gap-3 w-1/2 h-full relative">
                    <svg id="searchDocIcon" fill="currentColor" className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3 text-slate-600 transition-all duration-300" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search document..."
                        onKeyUp={(event) => {
                            if (event.target.value !== "") {
                                setDocumentSearch(event.target.value);
                            } else {
                                setDocumentSearch("");
                            }
                        }}
                        className="w-full h-full px-3 pl-9 bg-slate-100 outline-none focus:outline-none rounded-xl transition-all duration-300"
                        onFocus={(event) => {
                            event.currentTarget.classList.remove("bg-slate-100");
                            event.currentTarget.classList.add("bg-primary-100");
                            event.currentTarget.classList.add("placeholder:text-primary-600");
                            document.getElementById("searchDocIcon").classList.remove("text-slate-600");
                            document.getElementById("searchDocIcon").classList.add("text-primary-600");
                        }}
                        onBlur={(event) => {
                            event.currentTarget.classList.add("bg-slate-100");
                            event.currentTarget.classList.remove("bg-primary-100");
                            event.currentTarget.classList.remove("placeholder:text-primary-600");
                            document.getElementById("searchDocIcon").classList.add("text-slate-600");
                            document.getElementById("searchDocIcon").classList.remove("text-primary-600");
                        }}
                    />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary-600 p-1 hover:bg-primary-100 cursor-pointer">
                    {user?.info?.picture !== undefined ? (
                        <img className="h-10 w-10 rounded-full" src={user?.info?.picture}></img>
                    ) : (
                        <svg width={20} height={20} viewBox="0 0 24 24" className="text-primary-600" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6Zm-9-8a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
                                style={{
                                    fill: "currentColor",
                                }}
                            />
                        </svg>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default DocNavbar;
