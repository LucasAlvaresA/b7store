"use server";

import { setServerCart } from "@/libs/serverCookies";
import { CartItem } from "@/types/cartItem";

export const setCartState = async (cart: CartItem[]) => {
    await setServerCart(cart);
};
