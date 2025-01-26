import { TableImage } from "@/utility/images/ImgExport";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Shopping() {
  return (
    
      <motion.div
        className="flex mt-[80px] ml-[32px] mr-[32px] "
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
      >
        <div className="w-full flex sm:justify-between items-center sm:flex-row  flex-col">
          <div className=" max-w-[643px] w-full ">
            <div className="w-full flex  justify-between h-[50px] border-b-[1px] border-black text-[#121212] font-semibold">
              <h5>Product</h5>
              <div className="max-w-[322px] w-full flex justify-between">
                <h5>Quantity</h5>
                <h5>Price</h5>
                <h5>Subtotal</h5>
              </div>
            </div>
            <div className="h-[144px] flex items-center">
              <div className="max-w-[316px] w-full flex items-center">
                <Image src={TableImage} width={80} height={96} alt="table" />
                <div className="ml-4">
                  <h5>Tray Table</h5>
                  <h5>Color: Black</h5>
                  <button>Remove</button>
                </div>
              </div>
              <div className="max-w-[322px] w-full h-[32px] flex justify-between">
                <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
                  <button>-</button>
                  <h5>count</h5>
                  <button>+</button>
                </div>
                <h5>$19.00</h5>
                <h5>$38.00</h5>
              </div>
            </div>
            <div className="h-[144px] flex items-center">
              <div className="max-w-[316px] w-full flex items-center">
                <Image src={TableImage} width={80} height={96} alt="table" />
                <div className="ml-4">
                  <h5>Tray Table</h5>
                  <h5>Color: Black</h5>
                  <button>Remove</button>
                </div>
              </div>
              <div className="max-w-[322px] w-full h-[32px] flex justify-between">
                <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
                  <button>-</button>
                  <h5>count</h5>
                  <button>+</button>
                </div>
                <h5>$19.00</h5>
                <h5>$38.00</h5>
              </div>
            </div>
            <div className="h-[144px] flex items-center">
              <div className="max-w-[316px] w-full flex items-center">
                <Image src={TableImage} width={80} height={96} alt="table" />
                <div className="ml-4">
                  <h5>Tray Table</h5>
                  <h5>Color: Black</h5>
                  <button>Remove</button>
                </div>
              </div>
              <div className="max-w-[322px] w-full h-[32px] flex justify-between">
                <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
                  <button>-</button>
                  <h5>count</h5>
                  <button>+</button>
                </div>
                <h5>$19.00</h5>
                <h5>$38.00</h5>
              </div>
            </div>
          </div>
          <div className=" sm:max-w-[413px]  m-auto sm:ml-5   w-full p-[24px] border-[1px] border-black rounded-md">
            <div className="sm:max-w-[365px] w-full">
              <h5>Cart summary</h5>
              <div className="h-[52px] mt-4 border-[1px] border-black rounded-md flex justify-between p-4 items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="free"
                    name="fav_language"
                    value="free"
                  />
                  <label htmlFor="" className="ml-2">
                    Free shipping
                  </label>
                </div>
                <h5>$00</h5>
              </div>
              <div className="h-[52px] mt-4 border-[1px] border-black rounded-md flex justify-between p-4 items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="express"
                    name="fav_language"
                    value="express"
                  />
                  <label htmlFor="" className="ml-2">
                    Express shipping
                  </label>
                </div>
                <h5>$300</h5>
              </div>
              <div className="h-[52px] mt-4 border-[1px] border-black rounded-md flex justify-between p-4 items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="pickup"
                    name="fav_language"
                    value="pickup"
                  />
                  <label htmlFor="" className="ml-2">
                    Pick Up
                  </label>
                </div>
                <h5>$500</h5>
              </div>
              <div className="flex justify-between mt-4 h-[52px] items-center border-b-[1px] ">
                <h5>Subtotal</h5>
                <h5>$1921</h5>
              </div>
              <div className="flex justify-between mt-4 h-[52px] items-center  ">
                <h5>Total</h5>
                <h5>$1921</h5>
              </div>
              <button className="w-full bg-black text-white h-[52px] mt-[40px] rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    
  );
}
