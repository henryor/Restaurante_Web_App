// src/types/CartItem.ts

import { MenuProduct } from "@/types/Product"; 

export interface CartItem extends MenuProduct {
  quantity: number;
  portion: "full" | "half";
}
