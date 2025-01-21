import React from "react";
import { ContactUsBanner, ArrowRight } from "@/utility/images/ImgExport";
import Image from "next/image";

export default function ContactUsS2() {
  return (
    <div className="mt-[48px] flex">
      <Image
        src={ContactUsBanner}
        width={560}
        height={413}
        alt="BannerContactUs"
      />
      <div className="bg-[#F3F5F7] flex justify-center items-center w-full">
        <div className="max-w-[452px]">
          <h3 className="font-medium text-[40px] leading-10 text-[#121212]">
            About Us
          </h3>
          <p className="font-normal text-[16px] leading-[26px] text-[#121212] mt-[16px]">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <div className="flex mt-[24px] items-center">
            <button className="font-medium text-[16px] leading-7 text-[#121212] ">
              Shop Now
            </button>
            <Image src={ArrowRight} width={20} height={20} alt="ArrowRight" />
          </div>
        </div>
      </div>
    </div>
  );
}
