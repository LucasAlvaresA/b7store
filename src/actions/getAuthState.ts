"use server";

import { getServerAuthToken } from "@/libs/serverCookies";

export const getAuthState = async () => {
    const token = await getServerAuthToken();
    return { token };
};
