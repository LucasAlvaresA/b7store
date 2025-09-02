"use server";

import { getServerCart } from "@/libs/serverCookies";

export const getCartState = async () => {
    const cart = await getServerCart();
    return {
        cart,
    };
};
