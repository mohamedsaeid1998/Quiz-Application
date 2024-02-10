import React from "react";
import "./Register.module.scss";
import { background4, background5 } from "@/Assets/Images";
import {
  FaAddressCard,
  FaCheckCircle,
  FaEnvelope,
  FaKey,
  FaUserPlus,
  FaUserTie,
} from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="bg-mainBg">
        <div className="container mx-auto h-screen ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 pt-9">
            <div className="px-9 sm:p-0 ">
              <Link to="/">
                <div className="flex items-center text-white mb-8">
                  <FaRegCircleXmark className="text-5xl" />
                  <FaCheckCircle className="text-5xl" />
                  <p className="text-2xl mx-1">| Quizwiz</p>
                </div>
              </Link>
              <h2 className="text-mainColor font-semibold text-2xl my-3">
                Create your account and start using QuizWiz!
              </h2>

              <div className="flex items-center md:w-[100px]  py-5">
                <Link to="/">
                  <div className="bg-stone-700 me-[50px] p-[50px] rounded-lg text-center py-3  border-4 border-stone-700 ">
                    <FaUserTie className=" text-white text-6xl m-auto" />
                    <span className="text-white">Sign in</span>
                  </div>
                </Link>
                  <div className=" bg-stone-700 me-[50px] p-[50px] rounded-lg text-center py-3 border-4 border-[#C5D86D] ">
                    <FaUserPlus className="text-mainColor text-6xl m-auto" />
                    <span className="text-white">Sign Up</span>
                  </div>
              </div>

              <form>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="firstName">
                    <label
                      htmlFor="firstName"
                      className="text-white font-semibold">
                      Your first name
                    </label>
                    <div className="flex items-center mt-2 rounded-md border-2 border-white">
                      <span className="flex items-center me-3 pl-3 text-white ">
                        <FaAddressCard />
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        className=" px-2  flex-1 border-none bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type your first name"
                      />
                    </div>
                  </div>
                  <div className="lastName">
                    <label
                      htmlFor="lastName"
                      className="mt-5 text-white font-semibold"
                    >
                      Your last name
                    </label>
                    <div className="flex items-center mt-2 rounded-md border-2 border-white">
                      <span className="flex items-center me-3 pl-3 text-white ">
                        <FaAddressCard />
                      </span>
                      <input
                        type="text"
                        id="lastName"
                        className=" px-2   flex-1 border-none bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type your last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="email ">
                  <label htmlFor="email" className=" text-white font-semibold">
                    Your email address
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white ">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className=" px-2 rounded-r-md  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your email"
                    />
                  </div>
                </div>

                <div className="role">
                  <label htmlFor="role" className="text-white font-semibold">
                    Your role address
                  </label>
                  <div className="flex rounded-md mt-2 border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white">
                      <FaEnvelope />
                    </span>
                    <select
                      id="role"
                      className="border-none w-full p-2 text-slate-400  bg-transparent"
                    >
                      <option selected className="text-slate-500" value="">
                        Select your role
                      </option>
                      <option className="text-black" value="instructor">
                        Instructor
                      </option>
                      <option className="text-black" value="learner">
                        Learner
                      </option>
                    </select>
                  </div>
                </div>
                
                <div className="password ">
                  <label htmlFor="password" className="text-white font-semibold">
                    Password
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                      <FaKey />
                    </span>
                    <input
                      type="password"
                      id="password"
                      className=" px-2 flex-1  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your password"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-slate-50 flex items-center justify-center transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg p-5 py-2 mt-3 font-bold"
                  >
                    Sign Up
                    <span>
                    <FaCheckCircle className="mx-2 text-xl rounded-full" />
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full hidden   lg:flex justify-end items-center">
              <div className="w-[90%] bg-[#FFEDDF] p-3 rounded-lg">
                <img src={background5} className="w-full" alt="Register-img" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
