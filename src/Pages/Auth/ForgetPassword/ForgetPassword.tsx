import React from 'react'
import './ForgetPassword.module.scss'
import { background4 } from "@/Assets/Images";
import { FaCheckCircle, FaEnvelope, FaKey, FaUserPlus, FaUserTie } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return <>
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
              Forgot password
              </h2>
             {/* ---------------- */}


              <form className="my-10">
                <div className="email my-10">
                  <label htmlFor="email" className="mt-5 text-white font-bold">
                   Email address
                  </label>

                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white ">
                    <FaEnvelope/>
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="block px-2  focus:outline-none flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your email"
                    />
                  </div>
                </div>
              

                 <div className="flex items-center justify-between my-40">
                <button type="submit" className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50   rounded-lg px-10 py-2 mt-3 font-bold">
                  Send email
                  <span>
                  <FaCheckCircle className=' text-white inline mx-2 rounded-full bg-black'/>
                  </span>
                </button>
                 <p className="text-white font-semibold">Login? <Link to="/" className="text-mainColor underline">click here</Link></p>
                 </div>

              </form>
            </div>
            {/* img */}
            <div className="w-3/4">
            <img src={background4} className='w-full' alt="" />
            </div>
            {/* ----- */}
            
          </div>
        </div>
      </div>
  </>
}

export default ForgetPassword