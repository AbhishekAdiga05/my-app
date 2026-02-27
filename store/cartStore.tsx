import {create} from 'zustand';
import {Product} from "@/types/product";

interface cartState{
    cart:Product[];
    addToCart:(product:Product)=>void;
}

export const useCartStore = create<cartState>((set)=>({
    cart:[],

    addToCart:(product:Product)=>{
        set((state:cartState)=>({
            cart:[...state.cart, product],
        })),
    }
    ,
}))
