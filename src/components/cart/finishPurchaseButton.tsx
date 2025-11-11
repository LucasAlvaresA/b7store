"use client";

import { clearCartCookie } from "@/actions/clearCartCookie";
import { finishCart } from "@/actions/finishCart";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { redirect } from "next/navigation";

export const FinishPurchaseButton = () => {
    const { token, hydrated } = useAuthStore((state) => state);
    const cartStore = useCartStore((state) => state);

    const handleFinishButton = async () => {
        if (!token || !cartStore.setSelectedAddressId) return;

        const sessionUrl = await finishCart(
            token,
            cartStore.selectedAddressId,
            cartStore.cart
        );

        if (sessionUrl) {
            await clearCartCookie();
            cartStore.clearCart();
            redirect(sessionUrl);
        } else {
            alert("Error finishing the purchase");
        }
    };

    if (!hydrated) return null;

    if (!token) {
        return (
            <Link
                href={"/login"}
                className=" block w-full text-center px-6 py-5 bg-blue-600 text-white border-0 rounded-sm"
            >
                Faça login para finalizar
            </Link>
        );
    }

    return (
        <button
            disabled={!cartStore.selectedAddressId ? true : false}
            onClick={handleFinishButton}
            className="cursor-pointer w-full text-center px-6 py-5 bg-blue-600 text-white border-0 rounded-sm disabled:opacity-20"
        >
            Finalizar compra
        </button>
    );
};
