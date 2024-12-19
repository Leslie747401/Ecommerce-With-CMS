import { StaticImageData } from "next/image";
import { create } from "zustand";

interface Cart {
    Name: String;
    productImage: StaticImageData;
    size: String;
    color: String;
    price: number
}

interface CartState {
  Cart : Cart[]
  addToCart: (Name: string, productImage: StaticImageData, size: string, color: string, price: number) => void;
  removeFromCart: (Name: string) => void;    // id: string
} 

export const useStore = create((set) => ({

    // initial state

    Cart: [],

    // Add To Cart Hook

    addToCart: (Name: string, productImage: StaticImageData, size : string, color: string, price: number) => {

      set((state:CartState) => ({

        Cart: [
          ...state.Cart,
          { Name, productImage, size, color, price} as Cart,
        ],

      }));

    },

    // Remove From Cart Hook 

    removeFromCart: (Name : String) => {

      set((state:CartState) => ({

        Cart : state.Cart.filter((cart) => cart.Name !== Name),
      
    }));

    }

}));
