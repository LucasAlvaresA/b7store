"use client";

import { getAuthState } from "@/actions/getAuthState";
import { getCartState } from "@/actions/getCartState";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export const StoreHydration = () => {
    const authStore = useAuthStore((state) => state);

    useEffect(() => {
        // Hydrate auth store
        getAuthState().then(({ token }) => {
            if (token) {
                authStore.setToken(token);
            }
            authStore.setHydrated(true);
        });

        // Hydrate cart store
        getCartState().then(({ cart }) => {
            if (cart.length > 0) {
                useCartStore.setState({ cart });
            }
        });
    }, []);

    return null;
};
