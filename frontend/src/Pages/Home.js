import React from "react";
import Chat from "../Components/Chat";

const Home = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hidden">
                <iframe className="h-[50vh] w-auto aspect-square" src="https://lottie.host/?file=93b46eaf-7161-4215-86cd-75262e092fa7/YukNYIF8cj.json" />
            </div>

            <Chat />
        </div>
    );
};

export default Home;
