import React from "react";

const PricingPage = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Plans that scale with business</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">Clarity gives you the blocks &amp; components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-12 text-center sm:grid-cols-2 xl:grid-cols-4 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 sm:mt-16 lg:mt-20">
                    <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl h-full items-center justify-between">
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                                <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">Basic</h3>
                            <p className="mt-6 text-5xl font-semibold text-gray-900">₹0</p>
                            <p className="mt-1 text-sm font-normal text-gray-500">per month</p>
                            <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Access to latest tech products
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Limited data scraping (up to 5 websites)
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Basic API access for developers
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    10 Agents
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Live Chat Support
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Price drop alerts
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Priority email support
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Customizable product comparisons
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Real-time stock availability tracking
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Exclusive tech insights and reviews
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Advanced analytics and data reports
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href="#" title="" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" role="button">
                                    Start for Free
                                </a>
                            </div>
                            <p className="mt-5 text-sm font-normal text-gray-500">No credit card required</p>
                        </div>
                    </div>
                    <div className="relative bg-white border border-primary-700 rounded-2xl sm:rounded-3xl h-full items-center justify-between">
                        <div className="absolute inset-x-0 top-0 transform translate-y-px">
                            <div className="flex justify-center transform -translate-y-1/2">
                                <span className="inline-flex px-4 py-1 text-xs font-semibold tracking-widest bg-primary-900 text-white uppercase rounded-full ring-4 ring-white"> Popular choice </span>
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                                <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">Standard</h3>
                            <p className="mt-6 text-5xl font-semibold text-gray-900">₹500</p>
                            <p className="mt-1 text-sm font-normal text-gray-500">per month</p>
                            <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Access to latest tech products
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Enhanced data scraping (up to 20 websites)
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Standard API access for developers
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priority email support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Customizable product comparisons
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Live Chat Support
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Price drop alerts
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Real-time stock availability tracking
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Exclusive tech insights and reviews
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Advanced analytics and data reports
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href="#" title="" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-primary-900 border border-transparent rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700" role="button">
                                    Start 14 Days Trial
                                </a>
                            </div>
                            <p className="mt-5 text-sm font-normal text-gray-500">No credit card required</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl h-full items-center justify-between">
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                                <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">Pro</h3>
                            <p className="mt-6 text-5xl font-semibold text-gray-900">₹799</p>
                            <p className="mt-1 text-sm font-normal text-gray-500">per month</p>
                            <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Access to latest tech products
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced data scraping (up to 50 websites)
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Premium API access for developers
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Priority email and phone support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Customizable product comparisons
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Price drop alerts
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Real-time stock availability tracking
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Live Chat Support
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Exclusive tech insights and reviews
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-500 shrink-0" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    Advanced analytics and data reports
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href="#" title="" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" role="button">
                                    Start 14 Days Trial
                                </a>
                            </div>
                            <p className="mt-5 text-sm font-normal text-gray-500">No credit card required</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl h-full items-center justify-between">
                        <div className="px-4 py-5 sm:px-6 sm:py-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full">
                                <svg className="w-6 h-6 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">Exclusive</h3>
                            <p className="mt-6 text-5xl font-semibold text-gray-900">₹1199</p>
                            <p className="mt-1 text-sm font-normal text-gray-500">per month</p>
                            <ul className="mt-8 space-y-4 text-base font-normal text-left text-gray-900">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Access to latest tech products
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Enterprise-level data scraping (unlimited websites)
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Full API access with dedicated support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 priority email and phone support
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Customizable product comparisons
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Price drop alerts
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Real-time stock availability tracking
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Exclusive tech insights and reviews
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Advanced analytics and data reports
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-700 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Live Chat Support
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href="#" title="" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" role="button">
                                    Start 14 Days Trial
                                </a>
                            </div>
                            <p className="mt-5 text-sm font-normal text-gray-500">No credit card required</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
