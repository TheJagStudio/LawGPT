import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
    const [progress, setProgress] = useState(20);
    const whatWeDoContent = [
        {
            svg: "https://www.singlestore.com/images/components/image-icon/dashboard-acceleration.png",
            title: "Legal Document Analysis and Summarization",
            description: "LawGPT efficiently processes and analyzes legal documents, providing accurate summaries and key insights.",
        },
        {
            svg: "https://www.singlestore.com/images/components/image-icon/realtime.png",
            title: "Contract Review and Generation",
            description: "LawGPT assists in reviewing and generating contracts, ensuring legal accuracy and compliance with requirements.",
        },
        {
            svg: "https://www.singlestore.com/images/components/image-icon/scaling-database.png",
            title: "Legal Research Assistance",
            description: "LawGPT aids in legal research by swiftly extracting relevant information from vast legal databases, improving research efficiency.",
        },
        {
            svg: "https://www.singlestore.com/images/components/image-icon/database-consolidation.png",
            title: "Compliance and Regulatory Support",
            description: "LawGPT helps businesses stay compliant with changing regulations by interpreting and advising on legal compliance matters.",
        },
    ];

    const howItWorksContent = [
        {
            img: "https://www.singlestore.com/images/cms/components/section-key-benefit/data-exploration_inverted.png",
            title: "Speed",
            description: "Accelerate time-to-insight with a database built for fast ingest, high concurrency and low latency.",
        },
        {
            img: "https://www.singlestore.com/images/cms/components/section-key-benefit/unlimited-scale_inverted.png",
            title: "Scale",
            description: "Build on a cloud-native data platform designed for today’s most demanding applications and analytical systems.",
        },
        {
            img: "https://www.singlestore.com/images/cms/components/section-key-benefit/sql.png",
            title: "Customization",
            description: "LawGPT can be tailored to specific legal domains, practices, or requirements.",
        },
    ];

    // const awards = ["https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blte31b787d1374e59b/63bc596ec0053a15cd502eef/TR_Top_Rated_2022_Grey.svg?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blt383ab639898f7154/63bda33664209b15808bd2e5/G2_Leader_Summer_2022_Grey.svg?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltac58f6627608c8d9/63bda376013dbb4c68f9b28f/G2_Momentum_Leader_Summer_2022_Grey.svg?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltbe51b14680e38860/63bda3915b1a584de27d06e9/G2_Users_Loveus_Grey.svg?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blt8ffbd55812193dab/63bda288438f80612c397088/DBTA_Readers_Choice_Grey.png?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blt093f97bd3d0243b9/63bda39edeaa604530a6f122/Inc_5000_2022_Grey.png?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blte337b62da44d9597/64271eef2e3e5f1225cc1aba/Americas_Fastest_Growing_Companies_2023.svg?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltdf2b264865fa66a4/63bda3243b14fe612de4a42b/Fast_Company_World_Changing_Ideas_2021_Grey.png?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blt4de3b1a63c96afed/63bda3ae5d2483134881c2e2/SFBT_Fast_100_Grey.png?height=100", "https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf6db358785591d6e/63bda2afc0053a15cd50345c/Deloitte_Fast_500_Grey.png?height=100"];

    const featuredResources = [
        {
            img: "https://www.singlestore.com/images/uploads/img_resources_webinar_operationalizing-predictive-and-ml-applications-with-memsql_default.jpg",
            title: "Optimizing Legal Workflow: Leveraging LawGPT for Predictive Insights",
            contentType: "Webinar",
            description: "Explore LawGPT's role in enhancing legal workflow through predictive insights, optimizing operations and transforming the legal landscape.",
        },
        {
            img: "https://www.singlestore.com/images/uploads/img_resources_webinar_operationalizing-predictive-and-ml-applications-with-memsql_default.jpg",
            title: "Enhancing Legal Workflows with LawGPT",
            contentType: "Webinar",
            description: "LawGPT optimizes legal processes with its versatile AI, streamlining a variety of legal tasks efficiently.",
        },
        {
            img: "https://www.singlestore.com/images/uploads/img_resources_webinar_operationalizing-predictive-and-ml-applications-with-memsql_default.jpg",
            title: "LawGPT: Legal AI and Data-Intensive Applications Guide",
            contentType: "Whitepaper",
            description: "Explore LawGPT's legal AI capabilities and its applications in data-intensive legal tasks for enhanced efficiency and accuracy.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="md:py-16 pt-12 pb-8 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 mt-14 h-full w-full relative bg-black">
                <div className="max-w-5xl w-full h-full flex md:flex-row flex-col items-center justify-between md:gap-2 gap-6 mx-auto">
                    <div className="flex flex-col items-start justify-center md:w-1/2 w-full h-full">
                        <p className="text-primary-500 lg:text-2xl text-xl font-bold mb-2">LawGPT</p>
                        <p className="lg:text-3xl text-2xl uppercase font-bold lg:mb-1 text-gray-200">Real Time.</p>
                        <p className="lg:text-3xl text-2xl uppercase font-bold lg:mb-1 text-gray-200">Accurate.</p>
                        <p className="lg:text-3xl text-2xl uppercase font-bold lg:mb-1 text-gray-200">Law Summarizing System.</p>
                        <p className="font-medium lg:my-5 my-3 text-gray-200">LawGPT is an advanced AI system specifically tailored for summarizing and explaining complex legal principles, statutes, and cases, facilitating legal comprehension and research.</p>
                        <NavLink to="/chat" className="py-2 mt-2 px-4 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:gap-4">
                            Get A Demo
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </NavLink>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full h-full">
                        <img src="/static/images/hero-image.svg" className="w-full h-full xl:scale-150 lg:scale-110 md:scale-125 " alt="" />
                    </div>
                </div>
                <div className="absolute -bottom-5 left-0 w-full h-[5rem] rainbow-animation" style={{ backgroundImage: "url('/static/images/rainbow.png')", backgroundSize: "1600px", backgroundPositionY: "top", backgroundRepeat: "repeat-x" }}></div>
            </section>

            {/* What We Do */}
            <section className="md:py-16 md:pb-12 py-8 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 mt-6 h-full w-full relative">
                <div className="max-w-5xl w-full h-full mx-auto">
                    <h2 className="w-full text-center text-4xl font-bold mb-5 text-primary-600">What We Do</h2>
                    <p className="w-full text-center mb-5">LawGPT is a versatile AI system designed for a wide range of legal tasks. It offers legal research support, document analysis, contract review, and legal text summarization, making it an invaluable tool for legal professionals, students, and researchers seeking efficient and accurate solutions in the field of law.</p>
                    <p className="w-full text-center">Developed to cater to legal professionals and practitioners, lawGPT is engineered with a distributed AI architecture tailored for legal applications, enabling swift performance within the range of 10-100 milliseconds for intricate legal inquiries. This ensures seamless scalability for your legal operations, empowering legal teams to efficiently handle complex tasks and processes.</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
                        {whatWeDoContent.map((div, i) => (
                            <div key={i} className="border rounded-md hover:shadow-custom transition-all duration-300 flex flex-col items-center justify-center px-8 pt-8 pb-16 relative overflow-hidden group/content">
                                <img src={div.svg} className="w-32 h-32" alt="" />
                                <p className="text-xl text-center font-semibold mb-2">{div.title}</p>
                                <p className="text-sm text-center">{div.description}</p>
                                <p className="text-primary-600 mt-4 absolute -bottom-6 group-hover/content:bottom-6 transition-all duration-300 cursor-pointer">Read More</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How LawGPT Works */}
            <section className="py-20 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 mt-10 h-full w-full relative bg-black">
                <div className="absolute -top-5 left-0 w-full h-[5rem] rainbow-animation rotate-180" style={{ backgroundImage: "url('/static/images/rainbow.png')", backgroundSize: "1600px", backgroundPositionY: "top", backgroundRepeat: "repeat-x" }}></div>
                <div className="max-w-5xl w-full h-full mx-auto">
                    <p className="w-full text-center uppercase text-primary-600 font-semibold mb-4">How LawGPT Works</p>
                    <h2 className="w-full text-center text-gray-200 font-semibold text-4xl">An AI based Law System build for Law Professionals</h2>
                    {/* 3 Divs */}
                    <div className="mt-20 flex flex-col items-center justify-center w-full gap-10 md:gap-4">
                        {howItWorksContent.map((div, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <div key={index} className="w-full flex md:flex-row flex-col-reverse items-center justify-center gap-4">
                                        <div className="w-full md:w-1/2 md:pl-20">
                                            <p className="md:text-3xl text-2xl md:text-left text-center font-medium text-primary-600 mb-3">{div.title}</p>
                                            <p className="md:text-lg text-base md:text-left text-center text-gray-200 font-light md:max-w-xs">{div.description}</p>
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <img src={div.img} className="w-full h-full" alt="" />
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div key={index} className="w-full flex md:flex-row flex-col items-center justify-center gap-4">
                                    <div className="w-full md:w-1/2">
                                        <img src={div.img} className="w-full h-full" alt="" />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-20">
                                        <p className="md:text-3xl text-2xl md:text-left text-center font-medium text-primary-600 mb-3">{div.title}</p>
                                        <p className="md:text-lg text-base md:text-left text-center text-gray-200 font-light md:max-w-xs">{div.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="absolute -bottom-5 left-0 w-full h-[5rem] rainbow-animation" style={{ backgroundImage: "url('/static/images/rainbow.png')", backgroundSize: "1600px", backgroundPositionY: "top", backgroundRepeat: "repeat-x" }}></div>
                {/* <div className="absolute -bottom-5 left-0 w-full h-[4.5rem] rainbow-animation" style={{ backgroundImage: "url('/static/images/rainbow.png')", backgroundSize: "1300px", backgroundPositionY: "top", backgroundRepeat: "repeat-x" }}></div> */}
            </section>

            {/* Simplified Architecture */}
            <section className="md:py-16 py-12 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 mt-4 h-full w-full relative">
                <div className="max-w-5xl w-full h-full mx-auto">
                    <p className="w-full text-center uppercase text-primary-600 font-semibold mb-4">Simplified Architecture</p>
                    <h2 className="w-full text-center font-semibold text-4xl mb-5">Simplified Legal Insights: Streamlining Your Legal Workflow with LawGPT</h2>
                    <p className="w-full text-center text-gray-400 text-lg">Discover the power of LawGPT, an advanced AI system designed to simplify your legal workflow. This cutting-edge tool seamlessly integrates into your processes, providing clear and precise legal insights, making complex legal tasks more manageable.</p>
                    {/* Differentiator Div */}
                    <div className="mt-14 flex flex-col items-center justify-center w-full h-[570px] gap-10 md:gap-4 relative rounded-lg overflow-hidden shadow-custom" id="imageOverlayDiv">
                        <input
                            id="sliderProgress"
                            type="range"
                            className="w-[calc(100%+1rem)] z-30"
                            value={progress}
                            min="0"
                            max="100"
                            step="0.1"
                            onChange={(event) => {
                                setProgress(event.target.value);
                            }}
                        />
                        <div className="w-[calc(100%-0.25rem)] mx-auto h-full absolute top-0 left-0 z-10">
                            <div className="w-1 h-full absolute top-0 bg-primary-600 z-10" style={{ left: progress + "%" }} />
                        </div>
                        <img src="/static/images/legacy-architecture.png" alt="" className="w-full h-full absolute top-0 left-0 object-cover object-center" id="imageOverlayLeft" />
                        <img src="/static/images/modern-architecture.png" alt="" className="w-full h-full absolute top-0 left-0 object-cover object-center" id="imageOverlayRight" style={{ clipPath: "inset(0 0 0 " + progress + "%)" }} />
                    </div>
                </div>
            </section>

            {/* Awards */}
            {/* <section className="py-10 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 h-full w-full relative bg-slate-100">
                <div className="max-w-5xl w-full h-full mx-auto">
                    <p className="w-full text-center text-primary-600 text-2xl font-semibold mb-8">Awards and Recognition</p>
                    <div className="flex flex-wrap items-center justify-center md:gap-x-14 gap-6 md:gap-y-4">
                        {awards.map((image, i) => (
                            <img key={i} src={image} alt="" className="md:w-[100px] w-[70px] hover:scale-110 transition-all duration-300" />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Featured Resources */}
            <section className="md:py-16 py-12 pb-16 xl:px-0 lg:px-16 md:px-12 sm:px-10 px-8 mt-4 h-full w-full relative">
                <div className="max-w-5xl w-full h-full mx-auto">
                    <p className="w-full text-primary-600 text-2xl font-semibold mb-4">Featured Resources</p>
                    <div className="flex flex-wrap w-full h-full items-start justify-start gap-5 relative">
                        {featuredResources.map((feature, i) => (
                            <div key={i} className="rounded-lg overflow-hidden flex flex-col items-start justify-start border sm:h-96 h-[22rem] !min-w-72 w-full sm:!w-72 group/feature relative hover:shadow-custom">
                                <img src={feature.img} className="w-full h-44 object-cover object-center" alt="" />
                                <div className="p-5 pb-2 w-full h-full absolute top-44 left-0 group-hover/feature:top-0 z-20 bg-white transition-all duration-200">
                                    <p className="uppercase text-gray-400 font-medium text-xs md:text-sm mb-2">{feature.contentType}</p>
                                    <p className="font-semibold md:text-lg mb-3 sm:line-clamp-5 line-clamp-3">{feature.title}</p>
                                    <p className="h-0 group-hover/feature:h-full text-xs md:text-sm text-gray-400 leading-relaxed group-hover/feature:opacity-100 opacity-0 overflow-hidden line-clamp-[8]">{feature.description}</p>
                                </div>
                                <p className="text-primary-600 font-medium absolute lg:bottom-5 bottom-3 left-5 z-20 cursor-pointer">Watch Now</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
