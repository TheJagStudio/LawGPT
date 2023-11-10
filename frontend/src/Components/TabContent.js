import React from "react";

const TabContent = ({ id, activeTab, children }) => {
    return activeTab === id ? (
        <div className="py-4 w-full h-[calc(100%-6rem)]">
            <div className="flex flex-wrap items-center justify-center md:justify-start mx-auto w-full h-full">{children}</div>
        </div>
    ) : null;
};

export default TabContent;
