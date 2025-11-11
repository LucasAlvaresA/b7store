"use server";

import { setServerAuthToken } from "@/libs/serverCookies";

export const setAuthCookie = async (token: string) => {
    await setServerAuthToken(token);
};
