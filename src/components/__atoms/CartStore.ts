"use client";
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [], // Initialize the cart as an empty array
  addToCart: (product) =>
    set((state) => {
      // Check if the product already exists in the cart
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If it exists, increase the quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If it's a new product, add it to the cart
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
}));

export default useCartStore;
