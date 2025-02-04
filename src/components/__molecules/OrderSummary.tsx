import { TableImage } from "@/utility/images/ImgExport";
import Image from "next/image";
import React from "react";
// import useCartStore from "../__atoms/CartStore";

export default function () {
  // const cart = useCartStore((state) => state.cart);
  // const removeFromCart = useCartStore((state) => state.removeFromCart);
  // const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  // const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  // const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-[400px] ml-auto mr-auto w-full  p-4 border border-gray-300 rounded-md">
      <h1 className="text-xl font-bold mb-4">Order Summary</h1>
      {/* {cart.map((item) => (
        <div className="max-w-[376px] w-full h-[144px] flex items-center justify-between border-b-[1px] border-gray-300 ">
          <div className="flex items-center">
            <Image src={TableImage} width={80} height={96} alt="table" />
            <div className="ml-4">
              <h5>{item.name}</h5>
              <h5>{item.color}</h5>
              <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <h5>{item.quantity}</h5>
                <button onClick={() => increaseQuantity(item.id)}>-</button>
              </div>
            </div>
          </div>
          <h5>${item.price * item.quantity}</h5>
        </div>
      ))} */}

      {/* <div className="max-w-[376px] w-full h-[144px] flex items-center justify-between border-b-[1px] border-gray-300 ">
        <div className="flex items-center">
          <Image src={TableImage} width={80} height={96} alt="table" />
          <div className="ml-4">
            <h5>Tray Table</h5>
            <h5>Color: Black</h5>
            <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
              <button>-</button>
              <h5>count</h5>
              <button>+</button>
            </div>
          </div>
        </div>
        <h5>$38.00</h5>
      </div> */}
      <div className="h-[52px] flex justify-between mt-5">
        <h5>Shipping</h5>
        <h5>Free</h5>
      </div>
      <div className="h-[52px] flex justify-between mt-5">
        <h5>Subtotal</h5>

        {/* <h5>${total}</h5> */}
      </div>
      <div className="h-[52px] flex justify-between mt-5">
        <h5>Total</h5>
        {/* <h5>${total}</h5> */}
      </div>
    </div>
  );
}
