import React from "react";
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";

const SignInForm = () => {
  return (
    <>
      <div className="w-full max-w-[900px] mt-[70px] mb-[70px] h-screen mx-auto flex flex-col justify-center p-4">
        <form className="w-full max-w-[700px] h-full  p-8 bg-[#ffffff]">
          <h4 className="text-[#0a0a0a] text-[20px] font-bold py-2">Log In</h4>
          <p className="text-black text-[14px] py-2">
            Choose your sign in method
          </p>


          <div className="text-[#0d0d0d] space-x-4 flex items-center  w-full cursor-pointer font-bold p-4 bg-slate-50 ">
            <div className="mr-4">
                <AiOutlineGoogle  size={20}/>
            </div>
            Continue with Google
          </div>
          <div className="text-[#0d0d0d] flex items-center  cursor-pointer font-bold p-4 mt-2 bg-slate-50">
            <div className="mr-4">
            <AiFillApple size={20}/>

            </div>
            Continue with Apple
          </div>

          <input type="email" className="bg-slate-50 w-full p-4 mt-2" placeholder="Email" />

          <input type="text" className="bg-slate-50 w-full p-4 mt-2" placeholder="password" />

          <button
          className="bg-[#1f2558] text-white font-bold p-4 w-full text-center mt-4 rounded-3xl">
            Log In
            </button>

          <p className="text-center pt-4">
            or
            <span className="text-decoration-line: underline text-decoration-color: [#000] pl-2 cursor-pointer">
              Forgot password
            </span>
          </p>
          

          <p className="text-center pt-4">
            Dont have an account?
            <span className="text-black font-bold pl-2">Sign up</span>
          </p>

          <p className="text-decoration-line: underline text-decoration-color: #000; text-black text-center font-bold pt-2 pb-2">
            Log in with your organisation
          </p>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
