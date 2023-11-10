import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="flex items-center justify-center bg-primary-50/10 min-h-screen h-full">
            <div className="w-full max-w-[52rem] mx-auto p-4 sm:px-5">
                <div className="text-center">
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-slate-600 ">
                            Welcome to <span className="text-primary-600">LawGPT</span>
                        </h2>
                        <p className="text-slate-400 ">Please sign up to continue</p>
                    </div>
                </div>
                <div className="card mt-5 p-5 lg:p-7  border rounded-xl bg-white shadow-xl shadow-black/10">
                    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
                        <label className="block">
                            <span>First Name :</span>
                            <span className="relative mt-1.5 flex">
                                <input className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Enter First Name" type="text" />
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" className="h-[22px] w-[22px] transition-colors duration-200" fill="none" stroke="currentColor">
                                        <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z" fill="currentColor" />
                                    </svg>
                                </span>
                            </span>
                        </label>
                        <label className="block">
                            <span>Last Name :</span>
                            <span className="relative mt-1.5 flex">
                                <input className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Enter Last Name" type="text" />
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" className="h-[22px] w-[22px] transition-colors duration-200" fill="none" stroke="currentColor">
                                        <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z" fill="currentColor" />
                                    </svg>
                                </span>
                            </span>
                        </label>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 mt-4">
                        <label className=" block">
                            <span>Email :</span>
                            <span className="relative mt-1.5 flex">
                                <input className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Enter Username" type="text" />
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </span>
                            </span>
                        </label>
                        <label class="block">
                            <span>From where did you learnt about us?</span>
                            <span className="relative mt-1.5 flex">
                                <select class="form-select peer w-full rounded-lg border bg-transparent px-3 py-2 pl-8 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none border-slate-300 valid:border-primary-600">
                                    <option selected disabled>
                                        -- Select One --
                                    </option>
                                    <option value="Advertisement">Advertisement</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Word of Mouth">Word of Mouth</option>
                                    <option value="Others">Others</option>
                                </select>
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary-600 peer-valid:text-primary-600">
                                    <svg fill="currentColor" className="h-4 w-4 transition-colors duration-200" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z" />
                                    </svg>
                                </span>
                            </span>
                        </label>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 mt-4">
                        <label className=" block">
                            <span>Password :</span>
                            <span className="relative mt-1.5 flex">
                                <input className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Enter Password" type="password" />
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </span>
                            </span>
                        </label>
                        <label className=" block">
                            <span>Confirm Password :</span>
                            <span className="relative mt-1.5 flex">
                                <input className="form-input peer w-full rounded-lg border border-primary-600 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary-600 !outline-none placeholder-shown:border-slate-300" placeholder="Confirm Password" type="password" />
                                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-600 peer-focus:text-primary-600 peer-placeholder-shown:text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </span>
                            </span>
                        </label>
                    </div>

                    <div className="sm:mt-4 mt-6 flex items-center justify-between space-x-2">
                        <label className="inline-flex items-center space-x-2">
                            <input className="form-checkbox is-basic h-4 w-4 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary-600 !outline-none accent-primary-600 " type="checkbox" />
                            <span>I agree with privacy policy</span>
                        </label>
                    </div>
                    <button className="flex flex-nowrap items-center justify-center py-2 rounded-lg mt-5 w-full bg-primary-600 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 ">Sign In</button>
                    <div className="mt-4 text-center text-xs+">
                        <p>
                            <span>Already have an Account?</span>

                            <NavLink className="text-primary-600 ml-2 transition-colors hover:text-primary-600-focus " to="/login">
                                Sign In
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
                        <button className="flex flex-nowrap items-center justify-center py-1 rounded-lg  w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                            <img className="h-5 w-5" src="/static/images/github.svg" alt="logo" />
                            <span>Github</span>
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

export default SignUp;
