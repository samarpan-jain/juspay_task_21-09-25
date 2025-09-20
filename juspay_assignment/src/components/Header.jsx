// Example: Header.jsx
import { FaRegStar, FaBell } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { LuPanelLeft, LuPanelRight } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

const Header = ({setPanelOpen}) => {
    const handlePanelOpen = (side) => {
        setPanelOpen(prevState => ({
            ...prevState,
            [side]: !prevState[side]
        }));
    }
    
    return <header className="flex items-center justify-between px-5 pb-3 border-b bg-white">
        {/* Left Section */}
        <div className="flex items-center space-x-1">
            <span className="p-1 rounded hover:bg-gray-200">
                <LuPanelLeft className="text-xl cursor-pointer" onClick={()=>handlePanelOpen('left')} />
            </span>
            <span className="p-1 rounded hover:bg-gray-200">
                <FaRegStar className="text-xl cursor-pointer rounded hover:bg-gray-200" />
            </span>
            <span className="text-gray-400 hover:bg-gray-200 p-1 rounded cursor-pointer">Dashboards</span>
            <span className="text-gray-300 mx-2">/</span>
            <span className="text-black hover:bg-gray-200 p-1 rounded cursor-pointer">Default</span>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-3">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-12 py-1 rounded bg-gray-100 text-gray-400 placeholder-gray-400 focus:outline-none"
                    style={{ width: 140 }}
                />
                <FiSearch className="absolute left-2 top-2 text-gray-400" />
                <span className="absolute right-2 top-1 text-gray-300 text-base">⌘/</span>
            </div>
            <span className="p-1 rounded hover:bg-gray-200">
                <FiSun className="text-lg cursor-pointer" />
            </span>
            <span className="p-1 rounded hover:bg-gray-200">
                <FaClockRotateLeft className="text-lg cursor-pointer rounded hover:bg-gray-200" />
            </span>
            <span className="p-1 rounded hover:bg-gray-200">
                <FaBell className="text-lg cursor-pointer rounded hover:bg-gray-200" />
            </span>
            <span className="p-1 rounded hover:bg-gray-200">
                <LuPanelRight className="text-xl cursor-pointer rounded hover:bg-gray-200" onClick={()=>handlePanelOpen('right')} />
            </span>
        </div>
    </header>
};

export default Header;