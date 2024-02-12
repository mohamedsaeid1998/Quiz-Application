import React from 'react'
import { background4 } from "@/Assets/Images";
import { FaCheckCircle, FaEnvelope, FaKey} from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function ChangePassword() {
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
                Change password
              </h2>
             {/* ---------------- */}
              <form className="mt-3">
                <div className="oldPassword mt-2">
                  <label htmlFor="oldPassword" className="text-white font-bold">
                    Old Password
                  </label>
                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                    <FaKey/>
                    </span>
                    <input
                      type="password"
                      id="oldPassword"
                      className="block px-2  focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your old password"
                    /> 
                  </div>
                </div>
                <div className="newPassword mt-2">
                  <label htmlFor="newPassword" className="text-white font-bold">
                   New Password
                  </label>
                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                    <FaKey/>
                    </span>
                    <input
                      type="password"
                      id="newPassword"
                      className="block px-2  focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your new password"
                    />
                  </div>
                </div>
                <div className="confirmNewPassword mt-2">
                  <label htmlFor="confirmNewPassword" className="text-white font-bold">
                   Confirm New Password
                  </label>
                  <div className="flex rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                    <FaKey/>
                    </span>
                    <input
                      type="password"
                      id="confirmNewPassword"
                      className="block px-2  focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your confirm password"
                    />
                  </div>
                </div>
                 <div className="my-4">
                <button type="submit" className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50   rounded-lg px-10 py-2 mt-3 font-bold">
                  Change 
                  <span>
                  <FaCheckCircle className=' text-white inline mx-2 rounded-full bg-black'/>
                  </span>
                </button>
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
