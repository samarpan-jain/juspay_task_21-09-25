import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({ menuItems, userName, profileImgPath }) => {
    const [openMenus, setOpenMenus] = useState({});
    const [menuActiveTab, setMenuActiveTab] = useState('favorites');

    const toggleSubMenu = (index, menuName) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [index + '_' + menuName]: !prevState[index + '_' + menuName],
        }));
    };

    const renderMenuItems = (items, menuName) => {
        return items.map((item, index) => (
            <li key={index}>
                {item.submenu ? (
                    <>
                        <div
                            className="flex items-center text-black-400 cursor-pointer hover:bg-gray-200 p-2 rounded"
                            onClick={() => toggleSubMenu(index, menuName)}
                        >
                            <span className="text-xl text-gray-300">{openMenus[index + '_' + menuName] ? <MdOutlineKeyboardArrowDown /> : <MdKeyboardArrowRight />}</span>
                            {item.icon ? <span className="mr-2 text-lg">{item.icon}</span> : <span className="mr-2 text-[0.5rem] text-gray-300"> <FaCircle /></span>}
                            <span className="flex-1 text-base">{item.title}</span>
                        </div>
                        {openMenus[index + '_' + menuName] && (
                            <ul className="pl-6 mt-2">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="my-1">
                                        <NavLink
                                            to={subItem.path}
                                            className={({ isActive }) =>
                                                `flex items-center text-black-400 hover:bg-gray-200 p-2 rounded
                                                ${isActive ? 'text-black-400 bg-gray-200 p-2 rounded border-l-4 border-black' : ''}`}>
                                            {subItem.icon ? <span className="mr-2 text-lg">{subItem.icon}</span> : <span className="mr-2 text-[0.5rem] text-gray-300"> <FaCircle /></span>}
                                            <span className="text-base">{subItem.title}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ) : (
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center text-black-400 hover:bg-gray-200 p-2 rounded
              ${isActive ? 'text-black-400 bg-gray-200 p-2 rounded border-l-4 border-black' : ''}`
                        }
                    >
                        {item.icon ? <span className="mr-2 text-lg">{item.icon}</span> : <span className="mr-2 text-[0.5rem] text-gray-300"> <FaCircle /></span>}
                        <span className="text-base">{item.title}</span>
                    </NavLink>
                )}
            </li>
        ));
    };

    return (
        <aside className="h-screen w-64 bg-white-800 text-gray p-4 overflow-y-auto">
            <div className="flex items-center mb-6">
                <div className="pr-2 text-xl">{profileImgPath ? <img className="w-8 h-8 rounded-full object-cover" src={profileImgPath} alt="Profile Image"/> : <FaUserCircle />}</div>
                <span className="font-semibold">{userName}</span>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => setMenuActiveTab('favorites')}
                    className={`py-2 pr-4 text-sm ${menuActiveTab === 'favorites' ? 'text-gray-500' : 'text-gray-400'
                        }`}
                >
                    Favorites
                </button>
                <button
                    onClick={() => setMenuActiveTab('recently')}
                    className={`py-2 pl-4 text-sm ${menuActiveTab === 'recently' ? 'text-gray-500' : 'text-gray-400'
                        }`}
                >
                    Recently
                </button>
            </div>
            {menuActiveTab === 'favorites' && (
                <ul className="mb-4">
                    {renderMenuItems(menuItems.favorites, 'favorites')}
                </ul>
            )}

            {menuActiveTab === 'recently' && (
                <ul className="mb-4">
                    {renderMenuItems(menuItems.recently, 'recently')}
                </ul>
            )}
            <ul className="mb-4">
                <li className="text-gray-500 text-sm font-semibold mb-2">Dashboards</li>
                {renderMenuItems(menuItems.dashboards, 'dashboards')}
            </ul>
            <ul className="mb-4">
                <li className="text-gray-500 text-sm font-semibold mb-2">Pages</li>
                {renderMenuItems(menuItems.pages, 'pages')}
            </ul>
        </aside>
    );
};

export default Sidebar;