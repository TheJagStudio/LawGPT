import React from "react";

const Readme = () => {
    return (
        <div className="w-[60%] mt-28 mx-auto text-justify">
            <h1 className="text-4xl font-bold mb-8">Welcome to the world of legal innovation with LawGPT! 📚⚖️</h1>
            <p>Hello, legal enthusiast! 👋 We're thrilled to have you on board. LawGPT is a robust tool designed to assist you in researching, analyzing, and sharing legal information and applications powered by state-of-the-art language models.</p>
            <h2 className="text-2xl font-bold my-6">Useful Links 🔗</h2>
            <ul>
                <li className="mb-2">
                    <strong>Documentation:</strong> Dive into our comprehensive LawGPT Documentation to kickstart your legal journey and explore the capabilities of our AI-powered legal assistant. 🧐📜
                </li>
                <li className="mb-2">
                    <strong>Discord Community:</strong> Join our vibrant LawGPT Community Forum to ask questions, exchange legal insights, and connect with fellow legal professionals! 🗣️👥
                </li>
            </ul>
            <p>We can't wait to witness the legal solutions you create with LawGPT! Happy legal coding! ⚖️💼</p>
            <h2 className="text-2xl font-bold my-6">Welcome screen</h2>
            <p>
                To customize the welcome screen, simply edit the
                <code className="relative">
                    <code className="bg-slate-200 rounded p-2 mx-2">chainlit.md</code>
                </code>
                file at the root of your project. If you prefer not to have a welcome screen, you can leave this file empty.
            </p>
        </div>
    );
};

export default Readme;
