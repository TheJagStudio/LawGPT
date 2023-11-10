import React from "react";

const AboutUs = () => {
    return (
        <>
            <section className="w-full h-full min-h-screen relative p-0 overflow-hidden">
                <img src="/static/images/aboutUs.svg" className="w-full h-full object-cover absolute bottom-0 left-0" />
                <div className="xl:ml-20 md:ml-14 sm:ml-10 ml-8 md:pt-20 sm:pt-12 pt-0 w-full h-full flex flex-col xl:gap-10 lg:gap-7 gap-5 z-10">
                    <h1 className="xl:text-[70px] sm:text-[40px] text-[36px] w-full bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent sm:leading-[2.5rem] md:leading-[3rem] xl:leading-[4.5rem] font-extrabold">About Us</h1>
                    <p className="sm:block hidden xl:text-[1.3rem] lg:text-[1.15rem] md:text-[1rem] text-gray-800 xl:max-w-[580px] lg:max-w-[510px] md:max-w-[390px] sm:max-w-[330px] xl:leading-[2.2rem] lg:leading-[1.9rem]">LawGPT is a versatile AI system designed for a wide range of legal tasks. It offers legal research support, document analysis, contract review, and legal text summarization, making it an invaluable tool for legal professionals, students, and researchers seeking efficient and accurate solutions in the field of law.</p>
                    <p className="sm:hidden block text-gray-800 max-w-[70%]">LawGPT is a versatile AI system designed for a wide range of legal tasks. It offers legal research support, document analysis, contract review, and legal text summarization, making it an invaluable tool for legal professionals, students, and researchers seeking efficient and accurate solutions in the field of law.</p>
                    <button
                        onClick={() => {
                            document.getElementById("our-team").scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="flex z-20 items-center justify-center gap-3 bg-primary-600 px-5 py-3 rounded-lg text-white w-fit cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        Our Team
                    </button>
                </div>
            </section>
            <div className="rainbow-animation h-32 w-full absolute -bottom-10 z-40" style={{ backgroundImage: "url('/static/images/rainbow.png')", backgroundSize: "1600px", backgroundPositionY: "top", backgroundRepeat: "repeat-x" }}></div>
            <section className="w-full min-h-screen" id="our-team">
                <div className="sm:px-16 px-10 py-20">
                    <h1 className="xl:text-[70px] sm:text-[40px] text-[36px] w-full bg-gradient-to-r pb-5 from-white to-secondary bg-clip-text text-transparent sm:leading-[2.5rem] md:leading-[3rem] xl:leading-[4.5rem] font-extrabold text-center">The team behind LawGPT</h1>
                    <p className="text-lg text-gray-800 w-full text-center max-w-[600px] mx-auto">Meet the experts behind our success - our talented and dedicated team committed to delivering innovative solutions and exceptional results for the world.</p>

                    <div className="flex flex-col items-center justify-center gap-10 mt-14">
                        <div className="w-full flex items-center justify-center gap-10">
                            <div className="relative group overflow-hidden rounded-xl">
                                <img src="/static/images/JagratPatel.png" alt="Image" className="h-[390px] w-[390px] object-cover object-bottom rounded-xl" />
                                <div className="bg-white/50 backdrop-blur h-24  group-hover:bottom-0 transition-all duration-300 w-full  text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 -bottom-24 left-0">
                                    <p className="flex flex-col items-center w-full absolute gap-1 bottom-5 text-slate-800">
                                        Jagrat Patel<span className="text-base font-normal text-gray-700">Team Leader</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl">
                                <img src="/static/images/ShubhamBhogayata.png" alt="Image" className="h-[390px] w-[390px] object-cover object-top rounded-xl" />
                                <div className="bg-white/50 backdrop-blur h-28  group-hover:bottom-0 transition-all duration-300 w-full  text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 -bottom-28 left-0">
                                    <p className="flex flex-col items-center w-full absolute gap-1 bottom-5 text-slate-800 text-center">
                                        Shubham Bhogayata<span className="text-base font-normal text-gray-700">Co-Team Leader</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl">
                                <img src="/static/images/JaivinBarot.png" alt="Image" className="h-[390px] w-[390px] object-cover object-top rounded-xl" />
                                <div className="bg-white/50 backdrop-blur h-24  group-hover:bottom-0 transition-all duration-300 w-full  text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 -bottom-24 left-0">
                                    <p className="flex flex-col items-center w-full absolute gap-1 bottom-5 text-slate-800">
                                        Jaivin Barot<span className="text-base font-normal text-gray-700">Backend Developer</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl">
                                <img src="/static/images/ParthPadhiar.png" alt="Image" className="h-[390px] w-[390px] object-cover object-bottom rounded-xl" />
                                <div className="bg-white/50 backdrop-blur h-24  group-hover:bottom-0 transition-all duration-300 w-full  text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 -bottom-24 left-0">
                                    <p className="flex flex-col items-center w-full absolute gap-1 bottom-5 text-slate-800">
                                        Parth Padhiar<span className="text-base font-normal text-gray-700">Frontend Developer</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl">
                                <img src="/static/images/TaniskaGaur.png" alt="Image" className="h-[390px] w-[390px] object-cover object-top rounded-xl" />
                                <div className="bg-white/50 backdrop-blur h-24  group-hover:bottom-0 transition-all duration-300 w-full  text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 -bottom-24 left-0">
                                    <p className="flex flex-col items-center w-full absolute gap-1 bottom-5 text-slate-800">
                                        Tanishka Gaur<span className="text-base font-normal text-gray-700">Frontend Developer</span>
                                    </p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-xl">
                                <img src="/static/images/yaashuDave.png" alt="Image" className="h-[390px] w-[390px] object-cover object-top rounded-xl" />
                                <div className="bg-white/50 backdrop-blur h-24  group-hover:bottom-0 transition-all duration-300 w-full  text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 -bottom-24 left-0">
                                    <p className="flex flex-col items-center w-full absolute gap-1 bottom-5 text-slate-800">
                                        Yaashu Dave<span className="text-base font-normal text-gray-700">Frontend Developer</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
