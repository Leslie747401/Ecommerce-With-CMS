import { StaticImageData } from "next/image";
import { create } from "zustand";


/* ------------------------------------------- Cart State ------------------------------------------- */


interface Cart {
  id: string;
  Name: string;
  productImage: StaticImageData;
  size: string;
  color: string;
  price: number;
}

interface CartState {
  Cart: Cart[];
  addToCart: (id:string, Name: string, productImage: StaticImageData, size: string, color: string, price: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartStore = create<CartState>((set) => ({
  
    // Initial state
    Cart: [],

    // Add To Cart Hook
    addToCart: (id: string, Name: string, productImage: StaticImageData, size: string, color: string, price: number) => {
        set((state) => ({
            Cart: [{ id, Name, productImage, size, color, price }, ...state.Cart],
        }));
    },

    // Remove From Cart Hook
    removeFromCart: (id: string) => {
        set((state) => ({
            Cart: state.Cart.filter((cartItem) => cartItem.id !== id),
        }));
    },
    
}));


/* ------------------------------------------- Collection State ------------------------------------------- */


interface Collection {
    id: string;
    Name: string;
    productImage: StaticImageData;
    type: string;
    price: number;
  }
  
  interface CollectionState {
    Collection: Collection[];
    addToCollection: (id: string, Name: string, productImage: StaticImageData, type: string, price: number) => void;
    removeFromCollection: (id: string) => void;
  }
  
  export const CollectionStore = create<CollectionState>((set) => ({
    
    // Initial state
    Collection: [],
  
    // Add To Cart Hook
    addToCollection: (id: string, Name: string, productImage: StaticImageData, type:string, price: number) => {
      set((state) => ({
        Collection: [{ id, Name, productImage, type, price } , ...state.Collection],
      }));
    },
  
    // Remove From Cart Hook
    removeFromCollection: (id: string) => {
      set((state) => ({
        Collection: state.Collection.filter((collectionItem) => collectionItem.id !== id),
      }));
    },
    
  }));


