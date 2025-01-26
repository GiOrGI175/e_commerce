import React from "react";

export default function ShopTopFilters() {
  return (
    <>
      <div className="flex max-w-[548px] w-full justify-between gap-x-[10px]">
        <div className="max-w-[262px] w-full  gap-y-[8px]">
          <h4 className="font-bold text-[#6C7275] text-[16px]">Category</h4>
          <select
            className="w-full border-[2px] py-[14px] px-[5px] border-black rounded-md"
            name=""
            id=""
          >
            <option className="active:bg-gray-400" value="AllRoom">
              All Rooms
            </option>
            <option value="LivingRoom">Living Room</option>
            <option value="BedRoom">Bedroom</option>
          </select>
        </div>
        <div className="max-w-[262px] w-full h-[48px]  gap-y-[8px]">
          <h4 className="font-bold text-[#6C7275] text-[16px]">Price</h4>
          <select
            className="w-full border-[2px] py-[14px] px-[5px] border-black rounded-md"
            name=""
            id=""
          >
            <option className="active:bg-gray-400" value="AllRoom">
              All Price
            </option>
            <option value="LivingRoom">Living Room</option>
            <option value="BedRoom">Bedroom</option>
          </select>
        </div>
      </div>
    </>
  );
}
