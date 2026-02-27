"use client";
import { Product } from "@/types/product";
import { products } from "@/features/products/data";
import { useCartStore } from "@/store/cartStore";
import ProductList from "@/components/ProductList";

export default function Home() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10 text-black">
        Zustand Cart Project
      </h1>
      <p className="mt-4 text-3 font-bold text-black">Cart Items: {cart.length}</p>
      <ProductList products={products} onAdd={addToCart} />
    </main>
  );
}
