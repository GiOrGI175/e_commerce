"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedMethod, setSelectedMethod] = useState("creditCard");

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
  };

  const paymentMethod = watch("paymentMethod", "paypal");
  return (
    <div className="max-w-[1120px] w-full mt-8">
      <div className="grid grid-cols-2 gap-9">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="max-w-[643px] w-full   p-4 border border-gray-300 rounded-md flex flex-col gap-6">
              <h1 className="text-xl font-bold mb-4">Contact Information</h1>

              {/* First Name */}
              <div className="flex justify-between ">
                <div className="flex flex-col max-w-[285px] w-full">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-semibold mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col max-w-[285px] w-full">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-semibold mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-semibold mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
            </div>
            <div className="max-w-[643px] w-full  mt-8 p-4 border border-gray-300 rounded-md flex flex-col gap-6">
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-bold mb-4">Credit Card</h1>
              </div>

              {/* Credit Card Details - Shown Only When Credit Card is Selected */}
              {selectedMethod === "creditCard" && (
                <div className="space-y-4">
                  {/* Card Number */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="cardNumber"
                      className="text-sm font-semibold mb-1"
                    >
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      type="text"
                      {...register("cardNumber", {
                        required: "Card number is required",
                        pattern: {
                          value: /^[0-9]{16}$/,
                          message: "Enter a valid 16-digit card number",
                        },
                      })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your card number"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cardNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Expiration Date */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="expirationDate"
                      className="text-sm font-semibold mb-1"
                    >
                      Expiration Date
                    </label>
                    <input
                      id="expirationDate"
                      type="text"
                      {...register("expirationDate", {
                        required: "Expiration date is required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                          message: "Enter a valid expiration date (MM/YY)",
                        },
                      })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                    {errors.expirationDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.expirationDate.message}
                      </p>
                    )}
                  </div>

                  {/* CVC */}
                  <div className="flex flex-col">
                    <label htmlFor="cvc" className="text-sm font-semibold mb-1">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      type="text"
                      {...register("cvc", {
                        required: "CVC is required",
                        pattern: {
                          value: /^[0-9]{3,4}$/,
                          message: "Enter a valid 3-4 digit CVC",
                        },
                      })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your CVC"
                    />
                    {errors.cvc && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cvc.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md  mt-3"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
