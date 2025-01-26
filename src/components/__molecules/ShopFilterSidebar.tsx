import React from "react";

export default function ShopFilterSidebar() {
  return (
    <div className="hidden sm:block bg-white rounded-lg sm:row-start-1 sm:row-span-2 sm:col-start-1">
      <div className="font-bold text-lg mb-4">Filter</div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul className="space-y-2">
          <li className="">All Rooms</li>
          <li className="">Living Room</li>
          <li className="">Bedroom</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <ul className="space-y-2">
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" /> $0 - $99
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" /> $100 - $199
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" /> $200 - $299
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" /> $300+
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
