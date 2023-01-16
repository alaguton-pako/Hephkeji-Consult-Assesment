import { useState } from "react";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/Search.png";
import user from "../../assets/User.png";
import { AiOutlineBars } from "react-icons/ai";
import MainDash from "./MainDash";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: logo },
    { title: "Dashboard", src: logo1 },
    { title: "Dashboard", src: user },
    { title: "Users", src: logo },
  ];

  const BottomMenu = [
    { title: "Dashboard", src: user },
    { title: "Dashboard", src: user },
    { title: "Dashboard", src: user },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen relative duration-300`}
      >
        <div className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen p-5  pt-8 fixed duration-300`}>
          <div className={`cursor-pointer duration-500 ml-1`}>
            <AiOutlineBars size={30} onClick={() => setOpen(!open)} />
          </div>
          <div className="pt-6 mb-20">
            {Menus.map((Menu, index) => {
              const { title, src } = Menu;
              return (
                <div
                  key={index}
                  className="flex  rounded-md p-2 cursor-pointer hover:bg-black text-gray-300 text-sm items-center gap-x-4"
                >
                  <img src={Menu.src} className="h-5 w-5" alt="img" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-6">
            {BottomMenu.map((Menu, index) => {
              const { title, src } = Menu;
              return (
                <div
                  key={index}
                  className="flex  rounded-md p-2 cursor-pointer hover:bg-black text-gray-300 text-sm items-center gap-x-4"
                >
                  <img src={Menu.src} className="h-5 w-5" alt="img" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-screen flex-1">
        <MainDash />
      </div>
    </div>
  );
};
export default DashboardSidebar;
