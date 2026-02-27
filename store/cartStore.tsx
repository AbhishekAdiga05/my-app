import { create } from "zustand";
import { Product } from "@/types/product";

interface cartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  deleteCartItem: (id: number) => void;
}

export const useCartStore = create<cartState>((set) => ({
  cart: [],

  addToCart: (product: Product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },
  deleteCartItem: (id: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
}));
