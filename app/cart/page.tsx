"use client";
import { useCartStore } from "@/store/cartStore";
import { useEffect } from "react";

export default function CartPage() {
  const { cart, addToCart, deleteCartItem } = useCartStore();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-gray-800">Cart Page</h1>
      <p className="mt-4 text-black">Items in Cart : {cart.length}</p>
      <div className="mt-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow mb-4 text-black"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            <button
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => deleteCartItem(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
