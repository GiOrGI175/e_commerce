import Image from "next/image";
import { ProductImage } from "@/utility/images/ImgExport";

export default function ProductCard() {
  return (
    <div className="max-w-[262px] w-full h-[433px] border-gray-200 rounded-lg overflow-hidden ">
      <div className="relative">
        <Image
          className="w-full object-cover"
          src={ProductImage}
          alt="Product Image"
          width={262}
          height={262}
        />
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          <div className="bg-black text-white text-sm font-bold px-[14px] py-[4px] rounded-[4px]">
            NEW
          </div>
          <div className="bg-[#38CB89] text-white text-sm font-bold px-[14px] py-[4px] rounded-[4px]">
            -50%
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-[#121212] pt-[12px] gap-y-[4px]">
        <div className="flex items-center text-md">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        {/* Product Name */}
        <p className="font-semibold text-base ">Light Beige Pillow</p>
        {/* Price */}
        <span className=" font-medium text-xs">$3.99</span>
      </div>
    </div>
  );
}
