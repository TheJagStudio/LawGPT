import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center bg-primary-50/10 min-h-screen h-full">
            <div className="w-full max-w-[26rem] mx-auto p-4 sm:px-5">
                <div className="text-center">
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-slate-600 ">Welcome Back</h2>
                        <p className="text-slate-400 ">Please sign in to continue</p>
                    </div>
                </div>
                <div className="card mt-5 p-5 lg:p-7  border rounded-xl bg-white shadow-xl shadow-black/10">
                    <p id="errorMsg" className="hidden mb-2 w-full bg-red-200/50 rounded-lg p-1 px-3 truncate border border-red-500 text-red-600"></p>
                    <label className="block">
                        <span>Email :</span>
                        <span className="relative mt-1.5 flex">
                            <input id="email" name="email" className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Enter Username" type="text" />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </span>
                        </span>
                    </label>
                    <label className="mt-4 block">
                        <span>Password :</span>
                        <span className="relative mt-1.5 flex">
                            <input id="password" name="password" className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Enter Password" type="password" />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </span>
                        </span>
                    </label>
                    <div className="mt-4 flex items-center justify-between space-x-2">
                        <label className="inline-flex items-center space-x-2">
                            <input id="rememberMe" name="rememberMe" value="true" className="form-checkbox is-basic h-4 w-4 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary-600 !outline-none accent-primary-600 " type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-xs text-slate-400 transition-colors  hover:text-slate-800 focus:text-slate-800 ">
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        onClick={() => {
                            var formdata = new FormData();
                            formdata.append("email", document.getElementById("email").value);
                            formdata.append("password", document.getElementById("password").value);
                            formdata.append("rememberMe", document.getElementById("rememberMe").value);

                            var requestOptions = {
                                method: "POST",
                                body: formdata,
                                redirect: "follow",
                            };

                            fetch("/login", requestOptions)
                                .then((response) => response.json())
                                .then((result) => {
                                    if (result.success === true) {
                                        document.cookie = "sessionid=" + result.sessionid;
                                        window.location.href = "/";
                                    } else {
                                        document.getElementById("errorMsg").classList.remove("hidden");
                                        document.getElementById("errorMsg").innerHTML = result.error;
                                    }
                                })
                                .catch((error) => console.log("error", error));
                        }}
                        className="flex flex-nowrap items-center justify-center py-2 rounded-lg mt-5 w-full bg-primary-600 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 "
                    >
                        Sign In
                    </button>
                    <div className="mt-4 text-center text-xs+">
                        <p>
                            <span>Dont have Account?</span>

                            <NavLink className="text-primary-600 ml-2 transition-colors hover:text-primary-600-focus " to="/sign-up">
                                Create account
                            </NavLink>
                        </p>
                    </div>
                    <div className="my-7 flex items-center space-x-3">
                        <div className="h-px flex-1 bg-slate-200 "></div>
                        <p>OR</p>
                        <div className="h-px flex-1 bg-slate-200 "></div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="flex flex-nowrap items-center justify-center py-1 rounded-lg  w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                            <img className="h-5 w-5" src="/static/images/google.svg" alt="logo" />
                            <span>Google</span>
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
                    <a href="#">Privacy Notice</a>
                    <div className="mx-3 my-1 w-px bg-slate-200 "></div>
                    <a href="#">Term of service</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
