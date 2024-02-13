import React, { useState } from "react";
import { background5 } from "@/Assets/Images";
import { FaCheckCircle, FaKey } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import baseUrl from "@/Utils/Custom/Custom";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";

export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      let response = await baseUrl.post(`/api/auth/change-password`, data);
      console.log(response.data.message);
      setIsLoading(false);
      toast.success(response.data.message);
      // navigate("/dashboard");
    } catch (error: any) {
      toast.error(error?.response.data.message);
      console.log(error?.response.data.message);
      setIsLoading(false);
    }
  };
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
                Change password
              </h2>

              <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="oldPassword mt-2">
                  <label
                    htmlFor="oldPassword"
                    className="text-white font-semibold"
                  >
                    Old Password
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white">
                      <FaKey />
                    </span>
                    <input
                      type="password"
                      id="oldPassword"
                      className="px-2 rounded-r-md outline-none  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your old password"
                      {...register("password", {
                        required: true,
                      })}
                    />
                     {errors.password && errors.password.type === "required" && (
                      <span className="text-red-600">password is required!!</span>
                    )}
                    {errors.password && errors.password.type === "pattern" && (
                      <span className="text-red-600">invalid password!!</span>
                    )}
                  </div>
                </div>
                <div className="newPassword mt-2">
                  <label
                    htmlFor="newPassword"
                    className="text-white font-semibold"
                  >
                    New Password
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                      <FaKey />
                    </span>
                    <input
                      type="password"
                      id="newPassword"
                      className="px-2 rounded-r-md  outline-none flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your new password"
                      {...register("password_new", {
                        required: true,
                      })}
                    />
                    {errors.password_new&&errors.password_new.type==="required"&&(<span className="text-red-600">New password is required!!</span>)}
                  </div>
                </div>
                
                <div className="my-4">

                <button
                    type="submit"
                    className={
                      "bg-slate-50 flex items-center justify-center transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg p-5 py-2 mt-3 font-bold"+
                      (isLoading ? " disabled" : " ")
                    }
                  >
                    {isLoading == true ? (
                      <TbFidgetSpinner className="animate-spin" />
                    ) : (
                      <>
                        Change
                        <span>
                          <FaCheckCircle className="mx-2 text-xl rounded-full" />
                        </span>
                      </>
                    )}
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
}
