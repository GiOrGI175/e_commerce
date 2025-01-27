import React, { useEffect, useState } from "react";
import ProductCard from "../__atoms/productCard";
import { products } from "@/commons/services/product";
import { ProductImage } from "@/utility/images/ImgExport";
import { cartList } from "@/commons/services/cartList";
import useCartStore from "../__atoms/CartStore";
import useSetObj from "../__atoms/SetObj";
import useObjectStore from "../__atoms/SetObj";

export default function ShopProductGrid({ layout, setLayout }: any) {
  const [visibleProducts, setVisibleProducts] = useState<any>([]);
  const [page, setPage] = useState(0);

  const handleClick = () => {
    console.log(page);
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    const updateVisibleProducts = () => {
      const isMobile = window.innerWidth <= 1047;
      const itemRendered = isMobile ? 8 : 9;
      const itemAdded = isMobile ? 2 : 3;
      setVisibleProducts(products.slice(0, itemRendered + itemAdded * page));
    };

    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);
  }, [products, page]);
  const cart = useCartStore((state: any) => state.cart);
  const addToCart = useCartStore((state: any) => state.addToCart);
  console.log(cart);

  const setMyObject = useObjectStore((state: any) => state.setMyObject);

  return (
    <div className="flex flex-col items-center h-fit col-start-1 row-start-3 sm:col-start-2 sm:row-start-2">
      <div className="flex flex-wrap justify-center gap-[16px]">
        {visibleProducts.map((el: any) => (
          <ProductCard
            onAddToCart={() => addToCart(el)}
            setMyObject={setMyObject}
            id={el.id}
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
            image={el.image}
            images={el.images}
            stars={el.stars}
            category={el.category}
            wishlist={el.wishlist}
            quantity={el.quantity}
            SKU={el.SKU}
            chooseColor={el.chooseColor}
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
