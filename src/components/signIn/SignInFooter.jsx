import React from "react";
import { AiFillWechat } from "react-icons/ai";

const SignInFooter = () => {
  return (
    <>
      <ul className="w-full text-black p-4 mt-[70px] flex justify-between font-semibold">
        <li className="pt-8">@HQC-SPACE 2023</li>
        <div className="flex justify-between gap-10 items-end">
          <li className="">Privacy policy</li>
          <li className="flex flex-col items-center">
            <div>
              <AiFillWechat size={25} />
            </div>
            Terms and conditions
          </li>
        </div>
      </ul>
    </>
  );
};

export default SignInFooter;
