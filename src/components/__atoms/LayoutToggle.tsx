import { Sort1, Sort2, Sort3, Sort4 } from "@/utility/images/ImgExport";
import Image from "next/image";
import React from "react";

const LayoutToggle = ({
  layout,
  setLayout,
}: {
  layout: string;
  setLayout: Function;
}) => {
  return (
    <div
      className={`${
        layout == "Sort1" && "col-start-2 flex justify-between items-center"
      } `}
    >
      {layout == "Sort1" ? (
        <div>
          <h4 className="font-bold text-xl">Living Room</h4>
        </div>
      ) : null}
      <div className="flex gap-x-[32px] items-center">
        <h5>Sort By:</h5>
        <div className="flex">
          <button
            className={`${layout == "Sort1" ? "bg-[#E8ECEF]" : "bg-white"} p-3`}
            onClick={() => setLayout("Sort1")}
          >
            <Image src={Sort1} alt="Sort icon" />
          </button>
          <button
            onClick={() => setLayout("Sort2")}
            className={`${layout == "Sort2" ? "bg-[#E8ECEF]" : "bg-white"} p-3`}
          >
            <Image src={Sort2} alt="Sort Icon" />
          </button>
          <button
            onClick={() => setLayout("Sort3")}
            className={`${layout == "Sort3" ? "bg-[#E8ECEF]" : "bg-white"} p-3`}
          >
            <Image src={Sort3} alt="Sort Icon" />
          </button>
          <button
            onClick={() => setLayout("Sort4")}
            className={`${layout == "Sort4" ? "bg-[#E8ECEF]" : "bg-white"} p-3`}
          >
            <Image src={Sort3} alt="Sort Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutToggle;
