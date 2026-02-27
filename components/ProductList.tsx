"use client";

import { Product } from "@/types/product";

interface Props {
  products: Product[];
  onAdd: (product: Product) => void;
}

export default function ProductList({products, onAdd}: Props) {
    return (
        <div className="grid grid-cols-3 gap-6 mt-6">
            {products.map((p)=>(
                <div key={p.id} className="bg-white p-6 rounded-xl shadow ">
                    <h2 className="text-lg font-semibold text-black">{p.name}</h2>
                    <p className="text-gray-600"> ${p.price}</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => onAdd(p)}>
                        Add to Cart
                    </button>
                </div>
            ))}

        </div>
    )
}
