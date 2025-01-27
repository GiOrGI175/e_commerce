import React, { useEffect, useState } from "react";
import ProductCard from "../__atoms/productCard";
import { products } from "@/commons/services/product";
import { ProductImage } from "@/utility/images/ImgExport";

export default function ShopProductGrid({ layout, filters }: any) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let updatedProducts = products;

    if (filters.category && filters.category !== "All Rooms") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      updatedProducts = updatedProducts.filter((product) => {
        const price = product.price;
        return max ? price >= min && price <= max : price >= min;
      });
    }

    setFilteredProducts(updatedProducts);
  }, [filters]);

  return (
    <div
      className={`${
        layout == "Sort2"
          ? "col-start-1 col-span-2"
          : "col-start-1 sm:col-start-2   sm:row-start-2"
      } flex flex-col items-center h-fit  row-start-2`}
    >
      <div className="flex flex-wrap justify-center gap-[16px]">
        {filteredProducts.map((el: any) => (
          <ProductCard
            key={el.id}
            id={el.id}
            name={el.name}
            price={el.price}
            description={el.description}
            ProductImage={ProductImage}
            layout={layout}
          />
        ))}
      </div>
    </div>
  );
}
