import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductCard({
  setCart,
  id,
  layout,
  ProductImage,
  name,
  discount,
  price,
  isNew,
  description,
}: any) {
  const [showAddToCart, setShowAddToCart] = useState(false);

  const handleMouseEnter = () => {
    setShowAddToCart(true);
  };

  const handleMouseLeave = () => {
    setShowAddToCart(false);
  };

  const addToCart = (product: any) => {
    setCart((prevCart: any[]) => {
      const existingProduct = prevCart.find(
        (item: any) => item.id === product.id
      );

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        return prevCart.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product is new, add it to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        layout === "Sort3"
          ? "max-w-[548px] h-fit flex flex-col sm:flex-row gap-x-[24px] items-center"
          : "h-fit border-gray-200 rounded-lg overflow-hidden sm:max-w-[262px] max-w-[152px]"
      }`}
    >
      {/* Product Image */}
      <div className="relative w-[240px] ">
        <Image
          className="w-full object-cover"
          src={ProductImage}
          alt="Product Image"
          width={262}
          height={349}
        />
        <div
          className={`${layout === "Sort3" && "hidden"} absolute top-2 left-2`}
        >
          <div className="flex flex-col gap-2">
            <div className="bg-black text-white text-sm font-bold px-[14px] py-[4px] rounded-[4px]">
              {isNew && "NEW"}
            </div>
            <div className="bg-[#38CB89] text-white text-sm font-bold px-[14px] py-[4px] rounded-[4px]">
              {discount}
            </div>
          </div>
        </div>
        {showAddToCart && (
          <div className="flex justify-center">
            <button
              onClick={() =>
                addToCart({
                  id,
                  name,
                  price,
                })
              }
              className="absolute bottom-4 max-w-[200px] w-full bg-black text-white rounded-md py-[9px]"
            >
              Add To Cart
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div
        className={`text-[#121212] pt-[12px] ${
          layout === "Sort3" ? "gap-y-[16px]" : "gap-y-[4px]"
        } flex flex-col max-w-[282px] w-full`}
      >
        <div className="flex items-center text-md">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        {/* Product Name */}
        <p className="font-semibold text-base">{name}</p>
        {/* Price */}
        <span className="font-bold text-xs">{price}</span>
        {layout === "Sort3" && (
          <>
            <p>{description}</p>
            <div className="flex flex-col gap-y-[8px]">
              <button
                onClick={() =>
                  addToCart({
                    id,
                    name,
                    price,
                    ProductImage,
                    description,
                    isNew,
                  })
                }
                className="bg-black w-full  text-white rounded-md py-[9px]"
              >
                Add To Cart
              </button>
              <button className="py-[9px] font-bold">Wish List</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
