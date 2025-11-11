"use server";

import { clearServerAuthToken } from "@/libs/serverCookies";

export const clearAuthCookie = async () => {
    await clearServerAuthToken();
};
