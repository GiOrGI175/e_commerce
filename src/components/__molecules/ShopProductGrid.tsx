import React, { useEffect, useState } from "react";
import ProductCard from "../__atoms/productCard";
import { products } from "@/commons/services/product";
import { ProductImage } from "@/utility/images/ImgExport";

export default function ShopProductGrid({ layout, setLayout }: any) {
  const [visibleProducts, setVisibleProducts] = useState<any>([]);
  const [page, setPage] = useState(0);

  const handleClick = () => {
    console.log(page);
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    const updateVisibleProducts = () => {
      const isMobile = window.innerWidth <= 1047; // Check for mobile
      const itemRendered = isMobile ? 8 : 9; // 8 items on mobile, 9 on PC
      const itemAdded = isMobile ? 2 : 3;
      setVisibleProducts(products.slice(0, itemRendered + itemAdded * page)); // Slice based on page
    };

    updateVisibleProducts(); // Initial check
    window.addEventListener("resize", updateVisibleProducts); // Update on resize
  }, [products, page]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-[24px]">
        {visibleProducts.map((el: any) => (
          <ProductCard
            layout={layout}
            setLayout={setLayout}
            key={el.id}
            description={el.description}
            ProductImage={ProductImage}
            name={el.name}
            discount={el.discount}
            oldPrice={el.oldPrice}
            price={el.price}
            rating={el.rating}
            isNew={el.isNew}
          />
        ))}
      </div>
      <div>
        <button
          onClick={handleClick}
          className="font-medium mt-[80px] py-[6px]  px-[40px] border-[2px] border-black rounded-2xl"
        >
          Show More
        </button>
      </div>
    </div>
  );
}
