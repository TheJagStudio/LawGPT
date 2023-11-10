import React from "react";
import { Outlet } from "react-router-dom";

const DocLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default DocLayout;
