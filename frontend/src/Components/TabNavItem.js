import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={"border px-3 py-1 rounded-md transition-all cursor-pointer  " + (activeTab === id ? " border-primary-600 text-primary-600 hover:bg-primary-200/40 " : " border-slate-400 text-slate-400 hover:bg-slate-200/40 ")}>
            {title}
        </li>
    );
};

export default TabNavItem;
