import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import ahmed from "../../assets/ADENIGBA.png";

const MainDash = () => {
  return (
    <>
      <div className="w-auto m-w-[1024px] ">
        <div className="bg-white h-15px flex justify-between p-4 w-full">
          <div className="flex gap-4 items-center">
            <div>
              <span className="text-[#1f2558] font-bold pl-2">Hephkeji</span>
              <span className="text-[#FF0000] font-bold">CONSULT</span>
            </div>
            <div className="py-2 px-6 border-dotted border-2 rounded-full border-black">
              Auditor
            </div>
          </div>
          <div className="flex gap-10">
            <div className="border-r-4 border-black flex py-2 pr-4">
              <div>
                <AiFillMessage size={28} />
              </div>
              <div className="pl-4">
                <AiFillBell size={28} />
              </div>
            </div>
            <div className="flex">
              <div className="h-10 w-10 rounded-3xl">
                <img src={ahmed} className="w-full rounded-2xl" />
              </div>
              <div className="pl-4 pt-2">
                <AiOutlineArrowDown size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0d0d0d] h-10 w-full ">
      </div>

      <div className="w-[80%] mx-auto">
        <div className="pt-10 flex gap-10">
          <div className="h-10 mt-1 w-10">
            <img
              src={ahmed}
              className="w-full rounded-2xl"
              alt="profileImage"
            />
          </div>

          <div className="w-full">
            <div className="bg-white h-40 w-auto py-2 px-2 mb-2">
              <h1 className="font-bold text-[#0a0a0a]">Bolan Racheal</h1>
              <p>
                <span className="font-bold py-2 ">ID Au2435 2532</span>
              </p>
              <p className="bg-slate-50 px-6 mt-4 pt-4 py-4 mb-10 rounded-lg text-justify">
                Hi there! I am baba an auditor with large experience with
                companines from all over, i have been able to setup system for
                the public use
              </p>
            </div>
            <div>
              <div className="bg-white  w-full p-4 mb-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label htmlFor="gender">Gender</label>
                    <p className="pl-5 py-3 font-bold  bg-slate-50">Male</p>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="gender">PhoneNo</label>
                    <p className="pl-5 py-3 font-bold bg-slate-50 flex-1 w-50 mt-1">
                      08068699363
                    </p>
                  </div>
                </div>

                <div className="w-full pt-4">
                  <label htmlFor="email">Email</label>
                  <p className="pl-5 py-3 font-bold bg-slate-50 flex-1 w-50 mt-1">
                    lameda789@gmail.com
                  </p>
                </div>


                <div className="flex gap-2 pt-4">
                  <div className="flex-1">
                    <label htmlFor="address">Address</label>
                    <p className="pl-5 py-3 font-bold  bg-slate-50">23 Str, Lagos</p>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="country">Country</label>
                    <p className="pl-5 py-3 font-bold bg-slate-50 flex-1 w-50 mt-1">
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="w-full pt-4">
                  <label htmlFor="email">Member Since</label>
                  <p className=" py-3 font-bold flex-1 w-50 mt-1">
                    Dec 2022
                  </p>
                </div>
              </div>

              <button className="bg-[#1f2558] rounded-full text-center text-white py-3 px-6 mt-6 mb-6 w-full font-bold">
                Save Changes
              </button>





            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDash;
