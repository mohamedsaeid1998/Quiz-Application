import React from "react";
import "./Register.module.scss";
import { background4 } from "@/Assets/Images";
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
      <div className="bg-mainBg h-screen">
        <div className="container mx-auto p-5">
          {/* Top-left Logo */}
          <div className="text-white my-3 w-40 flex flex-row p-2">
            <div className="flex">
              <FaRegCircleXmark className="text-3xl" />
              <FaCheckCircle className="text-3xl" />
            </div>
            <div className="text-lg">| Quizwiz</div>
          </div>
         {/* ---------------- */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              {/* header */}
              <h2 className="text-mainColor font-bold">
                Create your account and start using QuizWiz!
              </h2>
              {/* ------- */}

              {/* Sign Up&In Icons */}
              <div className="grid grid-cols-4 mt-3">
                <Link to="/">
                  <div className="bg-stone-700 me-3 rounded-lg text-center py-3 ">
                    <FaUserTie className=" text-white text-6xl m-auto" />
                    <span className="text-white">Sign in</span>
                  </div>
                </Link>
                <div>
                  <div className=" bg-stone-700 ms-3 rounded-lg text-center py-3 border-4 border-[#C5D86D]  ">
                    <FaUserPlus className="text-mainColor text-6xl m-auto" />
                    <span className="text-white">Sign Up</span>
                  </div>
                </div>
              </div>
               {/* ---------------- */}
              <form className="mt-3">
                <div className="grid grid-cols-2 gap-2 ">

                  <div className="firstName">
                    <label htmlFor="firstName" className="mt-5 text-white font-bold">
                      Your first name
                    </label>
                    <div className="flex rounded-md border-2 border-white">
                      <span className="flex items-center me-3 pl-3 text-white ">
                        <FaAddressCard/>
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        className="block px-2 focus:outline-none flex-1 border-none bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type your first name"
                      />
                    </div>
                  </div>
                  <div className="lastName">
                    <label htmlFor="lastName" className="mt-5 text-white font-bold">
                      Your last name
                    </label>
                    <div className="flex rounded-md border-2 border-white">
                      <span className="flex items-center me-3 pl-3 text-white ">
                      <FaAddressCard/>
                      </span>
                      <input
                        type="text"
                        id="lastName"
                        className="block px-2 focus:outline-none  flex-1 border-none bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type your last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="email mt-2">
                  <label htmlFor="email" className="mt-5 text-white font-bold">
                    Your email address
                  </label>
                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white ">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="block px-2  flex-1 border-none focus:outline-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your email"
                    />
                  </div>
                </div>
                <div className="role mt-2">
                  <label htmlFor="role" className="mt-5 text-white font-bold">
                    Your role address
                  </label>
                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white">
                      <FaEnvelope />
                    </span>
                    <select
                      id="role"
                      className="border-none w-full p-2   text-slate-200 focus:outline-none bg-transparent"
                    >
                      <option selected value="">
                        Select your role
                      </option>
                      <option value="1">Instructor</option>
                      <option value="2">Learner</option>
                    </select>
                  </div>
                </div>
                <div className="password mt-2">
                  <label htmlFor="password" className="text-white font-bold">
                    Password
                  </label>
                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                      <FaKey />
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="block px-2 focus:outline-none  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your password"
                    />
                  </div>
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50   rounded-lg px-10 py-2 mt-3 font-bold"
                  >
                    Sign Up
                    <span>
                      <FaCheckCircle className=" text-white inline mx-2 rounded-full bg-black" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
            {/* img */}
            <div className="w-3/4">
              <img src={background4} className="w-full" alt="Register-img" />
            </div>
            {/* -------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
