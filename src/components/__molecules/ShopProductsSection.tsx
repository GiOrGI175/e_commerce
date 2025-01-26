"use client";
import React, { useState } from "react";
import LayoutToggle from "../__atoms/LayoutToggle";
import ShopFilterSidebar from "./ShopFilterSidebar";
import ShopTopFilters from "./ShopTopFilters";
import ShopProductGrid from "./ShopProductGrid";

export default function ShopProductsSection() {
  const [layout, setLayout] = useState("Sort1");

  return (
    <div className="min-h-screen mt-[50px] max-w-[1440px] w-full mx-auto flex justify-center">
      <div
        className={`max-w-[1188px] w-full px-[34px] grid ${
          layout === "Sort1"
            ? "grid-cols-[262px,1fr] grid-rows-[auto,1fr]"
            : "grid-cols-[1fr] grid-rows-[84px,1fr]"
        } gap-[10px]`}
      >
        {layout === "Sort1" && <ShopFilterSidebar />}

        <div
          className={`${
            layout == "Sort1" ? "" : "flex justify-between items-center"
          } `}
        >
          {(layout === "Sort2" || layout == "Sort3") && <ShopTopFilters />}
          <LayoutToggle layout={layout} setLayout={setLayout} />
        </div>

        <ShopProductGrid layout={layout} setLayout={setLayout} />
      </div>
    </div>
  );
}
