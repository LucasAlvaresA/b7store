"use server";

import { clearServerCart } from "@/libs/serverCookies";

export const clearCartCookie = async () => {
    await clearServerCart();
};
