import { Outlet } from "react-router-dom";
import Sidebar from "./sideMenu";
import { menuData } from "../assets/menu.jsx";
import Header from "./Header.jsx";
import RightSidebar from "./RightSidebar/RightSidebar.jsx";
import { useState } from "react";

export default function Layout() {
    const [panelOpen, setPanelOpen] = useState({ left: true, right: true });

    return <div className="w-full">
        {panelOpen.left && <div className="w-64 float-left">
            <Sidebar userName={"Bye Wind"} menuItems={menuData} />
        </div>}
        <div className={`${panelOpen.left ? 'ml-64' : ''} p-4 ${panelOpen.right ? 'mr-64' : ''}`}>
            <div>
                <Header setPanelOpen={setPanelOpen} />
            </div>
            <div className="my-4">
                <Outlet />
            </div>
        </div>
        {panelOpen.right && <aside className="float-right fixed w-[16rem] h-screen right-0 top-0 bg-white border-l px-4 py-6 overflow-y-auto">
            <RightSidebar />
        </aside>}
    </div>;
}