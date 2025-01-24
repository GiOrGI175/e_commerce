"use client";
import { BlackLogo } from "@/utility/images/ImgExport";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();  
  const router = useRouter();
  const RouterPush = () => {
    router.push("/sign-up");
  };

  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);  
  };

  return (
    <div className="flex max-w-[1600px] items-center w-full">
      
      <div className="bg-[url('/AuthImage.png')] w-6/12 h-screen max-h-[1080px] bg-no-repeat bg-cover bg-center">
        <Image
          src={BlackLogo}
          width={105}
          height={24}
          alt="LOGO"
          className="m-auto mt-4"
        />
      </div>

      
      <form
        onSubmit={handleSubmit(onSubmit)}  
        className="flex flex-col bg-[#FEFEFE] max-w-[456px] w-full p-8 ml-[88px]"
      >
        
        <h2 className="text-[#141718] text-[40px] leading-10 font-medium">
          Sign In
        </h2>
        <p className="mt-[24px] font-normal text-[16px] leading-6 text-[#6C7275]">
          Don’t have an account yet?{" "}
          <button onClick={RouterPush} className="text-[#38CB89]">Sign Up</button>
        </p>

        
        <div className="flex flex-col mb-4 mt-5">
          <label htmlFor="email" className="block">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border-b-[1px] border-b-black py-2"
            {...register("email", {
              required: "This is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-b-[1px] border-b-black py-2"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        
        
        <div className="flex items-center text-center">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="ml-2">
            Remember Me
          </label>
        </div>

        
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded mt-4"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
