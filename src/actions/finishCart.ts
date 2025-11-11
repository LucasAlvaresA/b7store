"use server";

import { CartItem } from "@/types/cartItem";

export const finishCart = async (
    token: string,
    addressId: number | null,
    cart: CartItem[]
) => {
    // Here would be the logic to process the cart finishing and generate the payment link
    return "https://google.com";
};
