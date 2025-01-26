import React from "react";

export default function Cart() {
  return (
    <div className="max-w-[1120px] w-full">
      <h2 className="text-center mt-20 text-[58px] leading-[54px] font-medium text-[#000000]">
        Cart
      </h2>
      <div className="flex justify-evenly mt-[40px]">
        <div className="flex items-center ">
          <div className="bg-[#23262F] w-[42px] h-[42px] rounded-[40px] flex justify-center items-center">
            <h5 className="text-white font-medium text-[16px] leading-4">1</h5>
          </div>
          <h5 className="text-black font-semibold text-[16px] leading-7 ml-[17px]">
            Shopping cart
          </h5>
        </div>
        <div className="flex items-center ">
          <div className="bg-[#23262F] w-[42px] h-[42px] rounded-[40px] flex justify-center items-center">
            <h5 className="text-white font-medium text-[16px] leading-4">2</h5>
          </div>
          <h5 className="text-black font-semibold text-[16px] leading-7 ml-[17px]">
            Checkout details
          </h5>
        </div>
        <div className="flex items-center ">
          <div className="bg-[#23262F] w-[42px] h-[42px] rounded-[40px] flex justify-center items-center">
            <h5 className="text-white font-medium text-[16px] leading-4">3</h5>
          </div>
          <h5 className="text-black font-semibold text-[16px] leading-7 ml-[17px]">
            Order complete
          </h5>
        </div>
      </div>
      <div className="flex mt-[80px]">
        <div className="w-full">
          <div className=" max-w-[643px] w-full ">
            <div className="w-full flex  justify-between h-[50px] border-b-[1px] border-black text-[#121212] font-semibold">
              <h5>Product</h5>
              <div className="max-w-[322px] w-full flex justify-between">
                <h5>Quantity</h5>
                <h5>Price</h5>
                <h5>Subtotal</h5>
              </div>
            </div>
            <div className="h-[144px]">
                

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
