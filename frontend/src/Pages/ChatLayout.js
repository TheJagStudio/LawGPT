import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";

const ChatLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default ChatLayout;
