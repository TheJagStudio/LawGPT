import React from "react";

const HomeFooter = () => {
    return (
        <footer className="w-full h-full bg-gradient-to-b from-[#1D1053] to-black md:py-20 md:pb-12 sm:pt-12 pt-20 pb-8 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 relative">
            <div className="absolute -top-5  left-0 w-full h-[5rem] rainbow-animation rotate-180" style={{ backgroundImage: "url('/static/images/rainbow.png')", backgroundSize: "1600px", backgroundPositionY: "top", backgroundRepeat: "repeat-x" }}></div>
            {/* Main Div */}
            <div className="max-w-5xl w-full h-full mx-auto flex flex-col items-center justify-center">
                {/* Upper Div */}
                <div className="flex md:flex-row flex-col items-center justify-center md:gap-0 gap-8 w-full">
                    <div className="md:w-[60%] w-full h-full md:h-52 flex flex-col items-start justify-center gap-8 md:border-r md:border-gray-100">
                        <p className="font-semibold text-3xl text-gray-100 drop-shadow-white drop-shadow-md">Start for Free Today</p>
                        <div>
                            <button className="border-2 border-gray-100 text-gray-100 bg-white/10 px-4 py-1.5 rounded-md sm:mr-4 mr-2 sm:mb-0 mb-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 sm:text-base text-sm">Talk to a Specialist</button>
                            <button className="border-2 border-primary-500 text-white bg-primary-500 px-4 py-1.5 rounded-md hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 sm:text-base text-sm">Start for Free</button>
                        </div>
                    </div>
                    <div className="md:w-[40%] w-full h-full md:h-52 flex flex-col items-start justify-center gap-6 lg:pl-20 md:pl-12">
                        <p className="flex items-center justify-center text-primary-500 relative ">
                            <svg fill="currentColor" className="w-4 h-4 text-black bg-white rounded-full p-0.5 mr-5" viewBox="0 0 16 16">
                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                            </svg>
                            <div className="relative lg:text-base text-sm flex items-center justify-center gap-2 hover:before:w-full before:transition-all before:duration-300 before:absolute before:content-[''] before:-bottom-1 before:left-0 before:w-0 before:h-px before:bg-primary-500">
                                Request A Quote
                                <svg fill="currentColor" className="w-3.5 h-3.5 text-primary-500" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </p>
                        <p className="flex items-center justify-center text-primary-500 relative ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-4" viewBox="0 0 640 512" style={{ color: "#ffffff" }}>
                                <path fill="currentColor" d="M298.8 64H224l-96 64V352h28.2l73.9 67.4 35.4 32.4 47.7-52.2 22.3 20.5 35.4 32.4 44.8-48.9 35.2 32.2 64.9-70.8-35.4-32.4-134.2-123-96.4 75-13 10.1-9.7-13.4-64-88-8.9-12.3 11.8-9.6L298.8 64zm74.1 124.9L512 316.8V128h-.7l-3.9-2.5L411.3 64H349.7L197.9 186.9l45.3 62.3 131-101.9 12.6-9.8 19.6 25.3-12.6 9.8-20.9 16.2zM96 128H0V384H96V128zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V384h96V128H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
                            </svg>
                            <div className="relative lg:text-base text-sm flex items-center justify-center gap-2 hover:before:w-full before:transition-all before:duration-300 before:absolute before:content-[''] before:-bottom-1 before:left-0 before:w-0 before:h-px before:bg-primary-500">
                                Sign Up to Become a Partner
                                <svg fill="currentColor" className="w-3.5 h-3.5 text-primary-500" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </p>
                        <p className="flex items-center justify-center text-primary-500 relative ">
                            <svg fill="currentColor" className="w-5 h-5 mr-4 text-white" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z" />
                            </svg>
                            <div className="relative lg:text-base text-sm flex items-center justify-center gap-2 hover:before:w-full before:transition-all before:duration-300 before:absolute before:content-[''] before:-bottom-1 before:left-0 before:w-0 before:h-px before:bg-primary-500">
                                Get a Technical Support
                                <svg fill="currentColor" className="w-3.5 h-3.5 text-primary-500" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </p>
                    </div>
                </div>

                {/* Other Links */}
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-10 mt-10 w-full">
                    <div className="flex flex-col items-start justify-start gap-2.5">
                        <p className="uppercase text-lg lg:mb-4 mb-1 font-semibold text-white">Product</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Cloud</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Self-Managed</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Ingest Data</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Tools and Monitoring</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Security</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Pricing</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Partner Connect</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Request a Demo</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                        <p className="uppercase text-lg lg:mb-4 mb-1 font-semibold text-white">Solutions</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Why LawGPT?</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Real-Time Analytics</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Supercharge SaaS Apps</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Scale Your Database</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">End Database Sprawl</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Compare Databases</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Customers</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                        <p className="uppercase text-lg lg:mb-4 mb-1 font-semibold text-white">Doc Analysis</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Rental Agreement</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Divorce Agreement</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Deed</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Will Agreement</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Affidavit</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Employee Agreement</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                        <p className="uppercase text-lg lg:mb-4 mb-1 font-semibold text-white">Support</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Support Plans</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Support FAQ</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Professional Services</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Documentation</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Training</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5">
                        <p className="uppercase text-lg lg:mb-4 mb-1 font-semibold text-white">Company</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">About Us</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Leadership</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Careers</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Partners</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">LawGPT For Good</p>
                        <p className="text-gray-400 text-sm hover:text-primary-500 hover:translate-x-1 transition-all duration-300 cursor-pointer">Contact Us</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-start sm:justify-center sm:gap-10 gap-6 flex-wrap mt-10 w-full">
                    <p>
                        <svg fill="currentColor" className="cursor-pointer w-7 h-7 text-white hover:text-primary-600 transition-all duration-300 hover:scale-125" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </p>
                    <p>
                        <svg fill="currentColor" className="cursor-pointer w-7 h-7 text-white hover:text-primary-600 transition-all duration-300 hover:scale-125" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </p>
                    <p>
                        <svg fill="currentColor" className="cursor-pointer w-7 h-7 text-white hover:text-primary-600 transition-all duration-300 hover:scale-125" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </p>
                    <p>
                        <svg fill="currentColor" className="cursor-pointer w-7 h-7 text-white hover:text-primary-600 transition-all duration-300 hover:scale-125" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                    </p>
                    <p>
                        <svg fill="currentColor" className="cursor-pointer w-7 h-7 text-white hover:text-primary-600 transition-all duration-300 hover:scale-125" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </p>
                </div>

                {/* Copyright Statement */}
                <h2 className="font-medium text-primary-600 sm:mt-4 mt-6 w-full sm:text-center">© LawGPT, 2023. All Rights Reserved</h2>
            </div>
        </footer>
    );
};

export default HomeFooter;
