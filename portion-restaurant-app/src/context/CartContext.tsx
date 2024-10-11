// src/context/CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { MenuProduct } from "@/types/Product";

interface CartContextType {
  cartItems: MenuProduct[];
  addToCart: (product: MenuProduct, portion: "full" | "half") => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<MenuProduct[]>([]);

  const addToCart = (product: MenuProduct, portion: "full" | "half") => {
    setCartItems((prevItems) => [...prevItems, { ...product, portion }]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
