import { useForm } from "react-hook-form";
import "./Register.module.scss";
import { background5 } from "@/Assets/Images";
import {
  FaAddressCard,
  FaCheckCircle,
  FaEnvelope,
  FaKey,
  FaUserPlus,
  FaUserTie,
} from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";
import useAction from "@/Utils/Hooks/UseAction";
import { RegisterData } from "@/Redux/Auth/RegisterSlice";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [passType, setPassType] = useState("password");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let Data = useAction(RegisterData);
  const onSubmit = async (data: any) => {
    setIsLoading(true);
     await Data(data)
      .then((res) => {
        if (res?.data?.message=="Record created successfully"){
          toast.success(res.data.message);
          console.log(res);
          setIsLoading(false);
          navigate("/");
        }else {
          if(typeof(res?.response?.data?.message)=="object")
          {
            toast.error(res?.response?.data?.message[0]);
          }else{
            toast.error(res?.response?.data?.message);
          }
        }
      }).finally(() => {
        setIsLoading(false);
      })
      
  };

  useEffect(() => {
    if (showPass) {
      setPassType("text");
      return;
    }
    setPassType("password");
  }, [showPass]);
  
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="firstName">
                    <label
                      htmlFor="firstName"
                      className="text-white font-semibold"
                    >
                      Your first name
                    </label>
                    <div className="flex items-center mt-2 rounded-md border-2 border-white">
                      <span className="flex items-center me-3 pl-3 text-white ">
                        <FaAddressCard />
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        className=" px-2 outline-none flex-1 border-none bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type your first name"
                        {...register("first_name", {
                          required: true,
                          minLength: {
                            value: 2,
                            message:
                              "first name shouldn't be less than two character",
                          },
                        })}
                      />
                       {errors.first_name &&
                        errors.first_name.type === "required" && (
                          <span className="text-red-600">
                            first name is required!!
                          </span>
                        )}
                      {errors.first_name &&
                        errors.first_name.type === "minLength" && (
                          <span className="text-red-600">
                            first name shouldn't be less than two character
                          </span>
                        )}
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
                        className=" px-2  outline-none   flex-1 border-none bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type your last name"
                        {...register("last_name", {
                          required: true,
                          minLength: {
                            value: 2,
                            message:
                              "last name shouldn't be less than two character",
                          },
                        })}
                      />
                      {errors.last_name &&
                        errors.last_name.type === "required" && (
                          <span className="text-red-600">
                            Last name is required!!
                          </span>
                        )}
                      {errors.last_name &&
                        errors.last_name.type === "minLength" && (
                          <span className="text-red-600">
                            last name shouldn't be less than two character
                          </span>
                        )}
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
                      className=" px-2 rounded-r-md outline-none  flex-1 border-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your email"
                      {...register("email", {
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      })}
                    />
                    {errors.email && errors.email.type === "required" && (
                      <span className="text-red-600">email is required!!</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <span className="text-red-600">invalid email!!</span>
                    )}
                  </div>
                </div>

                <div className="role">
                  <label htmlFor="role" className="text-white font-semibold">
                    Your role
                  </label>
                  <div className="flex rounded-md mt-2 border-2 border-white">
                    <span className="flex items-center me-3 pl-3 text-white">
                      <FaEnvelope />
                    </span>
                    <select
                      id="role"
                      className="border-none  outline-none w-full p-2 text-slate-400  bg-transparent"
                      {...register("role", {
                        required:true,
                      })}
                    >
                      <option className="text-slate-500" value={""}>
                        Select your role
                      </option>
                      <option className="text-black" value="Instructor">
                        Instructor
                      </option>
                      <option className="text-black" value="Student">
                      Student
                      </option>
                    </select>
                  </div>
                  {errors.role && errors.role.type === "required" && (
                <span className="text-red-600">role is required!!</span>
              )}
                </div>

                <div className="password ">
                  <label
                    htmlFor="password"
                    className="text-white font-semibold"
                  >
                    Password
                  </label>
                  <div className="flex items-center mt-2 rounded-md border-2 border-white">
                    <span className="flex  items-center me-3 pl-3 text-white ">
                      <FaKey />
                    </span>
                    <input
                      type={passType}
                      id="password"
                      className=" px-2 flex-1 outline-none  bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="Type your password"
                      {...register("password", {
                        required: true,
                      })}
                      />
                      {errors.password && errors.password.type === "required" && (
                          <span className="text-red-600">
                            password is required!!
                          </span>
                        )}
                  </div>
                  <div className="form-group">
                  <input
                    className="mx-1"
                    type="checkbox"
                    name="passType"
                    checked={showPass}
                    onChange={(e) => {
                      console.log(showPass);
                      setShowPass((prev) => !prev);
                    }}
                  />
                  <label className="text-orange-200" htmlFor="passType">
                    {showPass ? "hide password" : "show password "}
                  </label>
                </div>
                </div>

                <div className="flex items-center">
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
                          Sign Up
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
