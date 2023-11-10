import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UseChatGPTAtom, UserAtom, GPTContextAtom, ResearchDataAtom } from "../Variables";
import { useAtom } from "jotai";

const Navbar = () => {
    const [useChatGPT, setUseChatGPT] = useAtom(UseChatGPTAtom);
    const [user, setUser] = useAtom(UserAtom);
    const [gptContext, setGPTContext] = useAtom(GPTContextAtom);
    const [researchData, setResearchData] = useAtom(ResearchDataAtom);
    return (
        <>
            <div id="confirmNewChat" className="w-full h-screen bg-black/20 flex items-center justify-center fixed top-0 left-0 z-[51] scale-0 opacity-0 transition-all duration-300">
                <div className="w-max rounded-xl bg-white border border-slate-300 p-4 px-5 shadow-[0px_11px_15px_-7px_rgb(0_0_0_/_20%),_0px_24px_38px_3px_rgb(0_0_0_/_14%),_0px_9px_46px_8px_rgb(0_0_0_/_12%)]">
                    <p className="text-xl font-semibold text-slate-600">Create New Chat ?</p>
                    <p className="mt-3 text-sm text-slate-400">This will clear the current messages and start a new chat.</p>
                    <div className="flex items-center justify-end gap-3 mt-5">
                        <div
                            className="bg-primary-200/50 px-4 py-1 rounded-md text-primary-600 cursor-pointer"
                            onClick={() => {
                                document.getElementById("confirmNewChat").classList.add("scale-0");
                                document.getElementById("confirmNewChat").classList.add("opacity-0");
                            }}
                        >
                            <p>Cancel</p>
                        </div>
                        <div
                            className="border border-primary-200 px-4 py-1 rounded-md text-primary-600 cursor-pointer"
                            onClick={() => {
                                document.getElementById("chatContainer").innerHTML = "";
                                document.getElementById("confirmNewChat").classList.add("scale-0");
                                document.getElementById("confirmNewChat").classList.add("opacity-0");
                                setGPTContext("");
                                setResearchData({
                                    docUrl: "",
                                    docsource: "",
                                    headline: "",
                                    title: "",
                                });
                            }}
                        >
                            <p>Confirm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 z-50 flex flex-nowrap items-center justify-between gap-4 h-16 w-full bg-white border border-slate-200 p-3 px-10 font-medium">
                <div className="flex flex-nowrap gap-3 items-center">
                    <NavLink to="/" className="flex flex-nowrap gap-1 mr-3 text-primary-600 hover:scale-105 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 9360 9360">
                            <g fill="currentColor">
                                <path d="M4150 8979c-321-28-483-53-710-109-183-46-381-108-477-151-23-11-45-19-49-19-14 0-223-96-339-155-245-125-562-338-740-495-109-97-318-303-398-393-157-178-369-469-452-622-21-38-46-81-55-95-34-49-162-327-224-485-60-153-129-377-175-570-20-83-31-152-64-400-7-56-12-223-12-440 0-370 9-475 66-758 53-266 169-627 271-847 15-30 44-93 65-140 78-167 230-419 340-564 51-66 199-250 248-306 105-123 451-444 467-434 4 3 8 0 8-5 0-6 5-11 11-11 5 0-40 48-102 107-240 231-434 472-605 754-53 88-214 399-214 413 0 4-9 26-19 49-32 71-97 239-114 297-9 30-32 108-52 172-42 138-61 218-80 350-70 471-59 946 31 1396 35 174 119 444 189 608 175 415 375 738 646 1049 219 251 535 520 799 680 36 22 75 45 85 52 109 67 284 156 415 213 41 17 89 37 105 45 87 38 349 118 485 149 259 59 237 55 495 88 132 17 625 16 775-1 315-35 566-94 886-209 688-247 1302-722 1736-1341 295-422 509-932 598-1421 46-256 52-315 57-600 6-311-2-443-43-699-33-202-54-290-121-501-95-298-225-584-367-808-103-163-104-165-105-183-1-9 5-22 13-28 12-10 25 0 70 56 134 164 295 421 398 632 210 433 314 772 383 1245 54 368 45 785-25 1181-6 33-16 89-21 125-9 55-81 316-132 480-47 149-245 576-339 728-182 296-367 530-613 778-82 83-170 167-195 186-25 20-82 67-128 105-46 37-104 83-130 101-82 57-214 147-231 157-111 67-146 87-204 119-87 47-244 126-252 126-3 0-44 18-91 40s-106 46-132 54-91 31-146 51c-232 84-469 137-836 185-212 28-463 35-650 19z" />
                                <path d="M2864 7429c31-95 99-348 146-536 59-239 64-253 89-253 48 0 70-101 31-140-31-31-93-30-127 2-33 31-38 71-14 105l20 28-30 110c-44 157-43 155-87 325-52 198-92 340-104 363-21 41-27 12-21-110 7-162-18-401-67-646-6-27-13-85-16-130l-6-82 43-24c84-47 192-168 247-276 32-64 81-211 74-222-4-5-15-12-24-16-20-7-24-37-8-53 5-5 11-22 12-37 2-20 8-27 24-27 12 0 26-6 31-12 13-19 40-113 53-188 25-149 128-642 150-725 243-886 541-1546 1027-2270 189-283 223-330 236-327 7 2 9 0 5-3-4-4-3-16 3-27 18-33 21-13 5 33-19 56-37 156-43 241-4 57-3 69 12 74 9 4 20 3 25-2s27-80 49-166c102-404 373-798 811-1179 302-262 710-504 1055-627 181-63 208-72 232-72 30 0 29 8-6 50-155 190-247 351-220 390 8 12 17 7 50-30 23-25 61-71 85-103 149-196 343-347 598-467 118-55 163-70 320-105 155-35 265-46 466-47 358-1 671 48 1125 177 50 15 104 29 120 33 51 13 32 32-80 79-27 12-124 57-215 101s-187 90-215 102c-153 68-499 255-538 291-9 8-47 33-83 54-35 21-67 42-70 47-8 13 34 24 146 37 97 11 270 63 270 81 0 4-27 14-61 24-33 9-108 41-167 70-259 130-457 319-682 651-124 183-275 393-329 459-71 85-273 278-328 314-32 20-74 49-93 63-19 15-60 35-90 46-83 28-74 48 20 46 61-1 98-10 198-46 67-24 122-43 122-41 0 4-97 215-113 244-7 14-26 50-42 80-57 109-160 286-204 350-143 210-335 401-511 509-116 71-369 190-505 238-38 14-92 35-120 48-27 13-67 30-87 39-27 10-38 21-38 35 0 19 6 21 53 21 28 1 79 6 112 13 58 12 59 13 40 29-41 34-165 128-169 128-3 0-31 17-63 38-50 34-140 80-220 113-13 5-33 13-45 19-80 35-211 64-363 79-134 13-365-15-535-65-79-24-202-64-207-68-4-3 261-524 299-588 18-31 60-103 92-160 76-132 246-405 301-483 306-437 478-639 832-976 180-171 655-565 751-622 38-22 42-47 8-47-22 0-243 108-276 135-8 7-49 32-90 55-83 48-201 128-300 204-135 104-463 417-575 550-28 32-66 77-86 100-29 34-108 132-137 171-4 6-27 37-52 70-232 310-442 660-645 1080-59 121-140 288-180 370-124 255-225 487-330 755-18 47-52 128-75 180s-51 119-61 149-30 74-44 99c-29 52-31 70-8 87 15 11 15 14-5 40-17 21-19 31-11 46 5 10 17 19 26 19 12 0 14 6 9 28-3 15-9 42-12 60-6 29-10 32-43 32h-37l-19 83c-26 113-26 273-1 347 24 69 63 149 86 175 39 44 35 55-61 155-50 52-126 136-168 187-90 107-235 319-227 331 3 5 184 12 403 16 617 11 831 16 1058 26 116 5 350 9 520 10 282 1 541 12 553 25 3 3-10 5-29 5-23 0-30 3-20 9 7 5-178 11-430 15-848 13-1451 26-1976 42l-213 7 14-44zm-64-661c0-11 33-71 110-198 15-25 45-79 67-120s83-153 136-248c54-96 97-179 97-186 0-10-92-36-127-36-6 0-14 18-18 40-10 58-61 186-100 251-44 71-113 136-198 185-37 21-67 44-67 50 0 16 60 256 66 266 8 12 34 9 34-4zm434-816c2-4 7-24 11-43 6-35 5-37-27-47-18-6-58-12-88-14l-55-3-3 47-3 47 38 6c21 4 43 8 48 10 20 7 74 5 79-3zm34-170c-3-24-8-28-56-35-60-10-85 2-80 37 2 16 14 23 53 32 62 14 87 3 83-34zm3117 1668c31-34 115-103 115-93 0 4-16 19-34 33-19 14-33 29-33 34 1 4-14 17-33 28l-35 20 20-22zm-548-47c18-2 50-2 70 0 21 2 7 4-32 4-38 0-55-2-38-4z" />
                                <path d="M2210 7338c-19-18-38-32-41-31-12 4-335-333-410-427-376-474-603-980-708-1580-56-318-56-758 0-1085 35-207 96-439 156-599 180-477 435-879 768-1212 164-164 219-212 380-333 226-169 493-325 660-386 28-11 59-24 70-31 36-22 397-144 485-164 144-33 350-70 445-80 183-19 821-8 844 15 2 3-23 35-56 72-32 38-75 90-94 117s-46 65-60 85c-14 21-42 66-62 102l-37 66-207 7c-255 8-541 41-683 80-30 8-91 24-135 36-259 70-501 171-735 307-152 89-164 97-244 158-43 33-98 74-122 91-53 37-253 223-345 319-239 253-470 600-598 900-65 154-88 223-164 505-54 196-82 403-93 690-7 167 15 471 47 645 32 178 100 414 162 560 16 39 44 106 62 150 64 155 176 353 312 549 78 113 198 253 330 384 67 67 119 122 115 122s-23-14-42-32zm4401-90c188-185 384-446 525-697 138-247 279-626 333-896 48-242 56-338 55-630-1-250-4-300-28-460-51-344-178-741-315-990-61-111-84-150-92-160-17-18-8-46 64-192 40-81 79-163 85-182 7-19 14-32 16-30 13 14 78 133 134 244 129 261 210 495 286 825 14 63 30 131 36 150 44 169 44 830-1 1060-24 124-112 482-129 527-10 26-36 98-59 158-71 187-229 490-333 640-16 22-45 65-65 95-33 49-103 139-187 240-64 76-356 360-370 360-9 0-21 9-28 20s-17 20-22 20 38-46 95-102zM1975 1935c22-19 45-35 50-35 6 0-8 16-30 35s-44 34-50 34c-5 0 8-15 30-34z" />
                            </g>
                        </svg>
                        <h1 className="font-bold text-primary-600 text-xl">LawGPT</h1>
                    </NavLink>
                    <NavLink to="/chat" className={({ isActive }) => (isActive ? "bg-primary-200/50 px-4 py-1 rounded-md text-primary-600" : "px-4 rounded-lg text-slate-600")}>
                        Chat
                    </NavLink>
                    <NavLink to="/readme" className={({ isActive }) => (isActive ? "bg-primary-200/50 px-4 py-1 rounded-md text-primary-600" : "px-4 rounded-lg text-slate-600")}>
                        Readme
                    </NavLink>
                </div>
                <div className="flex flex-nowrap gap-4">
                    <button
                        className="flex flex-nowrap items-center justify-center gap-1 border border-primary-600 px-2 py-1 rounded-md text-primary-600 hover:bg-primary-200/40 transition-all"
                        onClick={() => {
                            document.getElementById("confirmNewChat").classList.remove("scale-0");
                            document.getElementById("confirmNewChat").classList.remove("opacity-0");
                        }}
                    >
                        <svg width={20} height={20} viewBox="0 0 24 24" className="text-primary-600" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 12h14m-7-7v14"
                                style={{
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                }}
                            />
                        </svg>
                        <span className="mr-2">New Chat</span>
                    </button>
                    <button className="flex flex-nowrap items-center justify-center gap-1  h-full w-auto aspect-square p-1.5 rounded-full hover:bg-primary-200/40 transition-all">
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
                    </button>
                    <label class="relative items-center cursor-pointer flex ">
                        <input
                            onChange={() => {
                                setUseChatGPT(!useChatGPT);
                            }}
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                            checked={useChatGPT}
                        />
                        {/* <span class="mr-3 text-sm font-medium text-primary-600 "></span> */}
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600 translate-y-[1px]"></div>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Navbar;

{
    /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="400 250 400 300" width={40} height={30}>
                    <g clipPath="url(#a)">
                        <g
                            style={{
                                display: "block",
                            }}
                        >
                            <path fill="#583F33" d="M592.391 522.154H463.15c-6.236 0-6.992 5.48-6.992 5.48v8.502l142.09 1.134v-8.314c0-5.29-5.857-6.802-5.857-6.802z" />
                            <path fill="#583F33" d="M584.333 511.069h-115.81c-5.587 0-6.264 4.91-6.264 4.91v7.619l127.323 1.016v-7.45c0-4.74-5.25-6.095-5.25-6.095z" />
                            <path fill="#623018" d="M589.652 519.225H462.299l-.023 2.952 127.376-.023v-2.929z" />
                        </g>
                        <g
                            style={{
                                display: "block",
                            }}
                            fill="#623A27"
                        >
                            <path d="M590.048 343.018a1.564 1.564 0 0 1-2.113.65l-47.726-25.261a1.563 1.563 0 0 1 1.461-2.762l47.727 25.262a1.564 1.564 0 0 1 .651 2.111z" />
                            <path d="M590.048 343.018a1.564 1.564 0 0 1-2.113.65l-47.726-25.261a1.563 1.563 0 0 1 1.461-2.762l47.727 25.262a1.564 1.564 0 0 1 .651 2.111zm-29.004 54.798a1.564 1.564 0 0 1-2.113.65l-47.726-25.261a1.563 1.563 0 0 1 1.461-2.762l47.727 25.261a1.564 1.564 0 0 1 .651 2.112z" />
                            <path d="M561.044 397.816a1.564 1.564 0 0 1-2.113.65l-47.726-25.261a1.563 1.563 0 0 1 1.461-2.762l47.727 25.261a1.564 1.564 0 0 1 .651 2.112z" />
                            <path d="m591.59 335.56-35.32 66.73-47.063-24.911 35.319-66.73 47.064 24.911z" />
                        </g>
                        <path
                            d="M563.771 416.442c-2.904 5.488-9.718 7.585-15.206 4.68l-50.157-26.547c-5.488-2.905-7.585-9.718-4.68-15.206s9.718-7.585 15.205-4.68l50.158 26.548c5.488 2.904 7.585 9.718 4.68 15.205zm43.623-82.417c-2.905 5.488-9.718 7.585-15.206 4.68l-50.157-26.547c-5.488-2.905-7.585-9.719-4.68-15.206s9.718-7.585 15.205-4.68l50.158 26.547c5.488 2.905 7.585 9.719 4.68 15.206z"
                            style={{
                                display: "block",
                            }}
                            fill="#623A27"
                        />
                        <g
                            style={{
                                display: "block",
                            }}
                            fill="#623A27"
                        >
                            <path d="m591.079 360.04-15.672 29.608a3.627 3.627 0 0 1-4.9 1.508 3.627 3.627 0 0 1-1.507-4.9l15.671-29.608a3.627 3.627 0 0 1 4.9-1.508 3.627 3.627 0 0 1 1.508 4.9z" />
                            <path d="m599.976 369.416-11.11 20.991-15.688-8.303 11.11-20.991 15.688 8.303z" />
                            <path d="m607.45 370.26-14.269 26.957-6.407-3.391 14.268-26.957 6.407 3.392z" />
                            <path d="m738.309 442.07-136.11-67.234-11.995 10.905 136.318 77.527s10.022 6.719 15.752-4.108-3.965-17.09-3.965-17.09z" />
                        </g>
                        <g
                            transform="rotate(27.892 -69.027 1110.126)"
                            style={{
                                display: "block",
                            }}
                        />
                        <path
                            fill="#D2A23C"
                            d="M31.875-17.125v34.25c0 5.519-4.481 10-10 10h-43.75c-5.519 0-10-4.481-10-10v-34.25c0-5.519 4.481-10 10-10h43.75c5.519 0 10 4.481 10 10z"
                            transform="matrix(.86563 .45818 -.46781 .88383 550.474 357.218)"
                            style={{
                                display: "block",
                            }}
                        />
                        <path
                            fill="#FFF"
                            d="m194.75 191.5 4.75 8.75-4.75 9.5 9.25-4.5 8.25 4.5-4.75-10 4.75-8.5-9.253 4.632-8.247-4.382z"
                            transform="rotate(45.018 -355.788 876.954) scale(.00464)"
                            style={{
                                display: "block",
                            }}
                        />
                    </g>
                </svg> */
}
