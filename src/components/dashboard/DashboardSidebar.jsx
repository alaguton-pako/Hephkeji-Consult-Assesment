import { useState } from "react";
import logo from '../../assets/logo.png'
import logo1 from '../../assets/Search.png'
import logo2 from '../../assets/logo.png'
import { AiOutlineBars } from "react-icons/ai";
import MainDash from "./MainDash";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: {logo} },
    { title: "Dashboard", src: "Chat" },
    { title: "Dashboard", src: "Chat" },
    { title: "Users", src: "Chat"},
    { title: "Dashboard", src: "Chat", gap: true },
    { title: "Users", src: "User"  },
    { title: "Users", src: "User"  },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen p-5  pt-8 relative duration-300`}
      >
        <div className={`cursor-pointer duration-500`}>
          <AiOutlineBars size={30}
          onClick={() => setOpen(!open)}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-black text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-10" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
                
              {/* <img src={`.\src\assets/${Menu.src}.png`} /> */}
              <img src={logo} alt="img"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <MainDash/>
      </div>
    </div>
  );
};
export default DashboardSidebar;