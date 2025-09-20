import { RiAccountBoxLine } from "react-icons/ri";
import { PiChartPieThin } from "react-icons/pi";
import { PiShoppingBagOpen } from "react-icons/pi";
import { RiFolder6Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineIdcard } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { PiNotebook } from "react-icons/pi";
import { PiChatsCircle } from "react-icons/pi";

export const menuData ={
  "favorites": [
    { "title": "Overview", "path": "/#1home" },
    { "title": "Projects", "path": "/#2home" }
  ],
  "recently": [
    { "title": "Recent Page 1", "path": "/#3home" },
    { "title": "Recent Page 2", "path": "/#4home" }
  ],
  "dashboards": [
    {
      "title": "Default",
      "path": "/home",
      "icon": <PiChartPieThin/>
    },
    {
      "title": "eCommerce",
      "icon": <PiShoppingBagOpen/>,
      "submenu": [
        { "title": "Order List", "path": "/order-list" },
        { "title": "Orders Dashboard", "path": "/#7home" }
      ]
    },
    {
      "title": "Projects",
      "icon": < RiFolder6Line/>,
      "submenu": [
        { "title": "Overview", "path": "/#6home" },
        { "title": "Projects", "path": "/#7home" }
      ]
    },
    {
      "title": "Online Courses",
      "icon": < IoBookOutline/>,
      "submenu": [
        { "title": "Overview", "path": "/#8home" },
        { "title": "Courses", "path": "/#9home" }
      ]
    }
  ],
  "pages": [
    {
      "title": "User Profile",
      "icon": < RiAccountBoxLine/>,
      "submenu": [
        { "title": "Overview", "path": "/#10home" },
        { "title": "Projects", "path": "/#11home" },
        { "title": "Campaigns", "path": "/#12home" },
        { "title": "Documents", "path": "/#13home" },
        { "title": "Followers", "path": "/#14home" }
      ]
    },
    {
      "title": "Account",
      "icon": <AiOutlineIdcard/>,
      "submenu": [
        { "title": "Overview", "path": "/#15home" },
        { "title": "Projects", "path": "/#16home" }
      ]
    },
    {
      "title": "Corporate",
      "icon": < GrGroup/>,
      "submenu": [
        { "title": "Overview", "path": "/#17home" },
        { "title": "Projects", "path": "/#18home" }
      ]
    },
    {
      "title": "Blog",
      "icon": <PiNotebook/>,
      "submenu": [
        { "title": "Overview", "path": "/#20home" },
        { "title": "Projects", "path": "/#20home" }
      ]
    },
    {
      "title": "Social",
      "icon": <PiChatsCircle/>,
      "submenu": [
        { "title": "Overview", "path": "/#21home" },
        { "title": "Projects", "path": "/#22home" }
      ]
    }
  ]
}