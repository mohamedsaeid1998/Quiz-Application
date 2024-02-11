import React from "react";
import "./ResetPassword.module.scss";
import { background5 } from "@/Assets/Images";
import {
  FaCheckCircle,
  FaEnvelope,
  FaKey,
} from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="bg-mainBg">
        <div className="container mx-auto h-screen">
          <div className="grid grid-cols-1  gap-4 lg:grid-cols-2 pt-9">
            <div className="p-11 sm:p-0">
              <Link to="/">
                <div className="flex items-center text-white mb-8">
                  <FaRegCircleXmark className="text-5xl" />
                  <FaCheckCircle className="text-5xl" />
                  <p className="text-2xl mx-1">| Quizwiz</p>
                </div>
              </Link>
              <h2 className="text-mainColor font-semibold text-2xl my-3">
                Reset password
              </h2>
              <form>
                <div className="email mt-2">
                  <label htmlFor="email" className="text-white font-semibold">
                    Your email address
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white ">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="px-2 rounded-r-md  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your email"
                    />
                  </div>
                </div>
                <div className="OTP mt-2">
                  <label htmlFor="OTP" className="text-white font-semibold">
                    OTP
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white ">
                      <FaEnvelope />
                    </span>
                    <input
                      type="text"
                      id="OTP"
                      className="px-2 rounded-r-md  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your OTP"
                    />
                  </div>
                </div>
                <div className="password mt-2">
                  <label
                    htmlFor="password"
                    className="text-white font-semibold"
                  >
                    Password
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white">
                      <FaKey />
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="px-2 rounded-r-md  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your password"
                    />
                  </div>
                </div>
                <div className="confirmPassword mt-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-white font-semibold"
                  >
                    Confirm Password
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                      <FaKey />
                    </span>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="px-2 rounded-r-md  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your confirm password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-slate-50 flex items-center justify-center transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg p-5 py-2 mt-3 font-bold"
                  >
                    Reset
                    <span>
                      <FaCheckCircle className="mx-2 text-xl rounded-full" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
        
            <div className="w-full hidden   lg:flex justify-end items-center">
              <div className="w-[90%] bg-[#FFEDDF] p-3 rounded-lg">
                <img src={background5} className="w-full" alt="login-img" />
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
