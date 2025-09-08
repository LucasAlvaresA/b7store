"use client";

import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cartListItem";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
    initialCartProducts: CartListItem[];
    initialSubtotal: number;
};

export const CartContainer = ({
    initialCartProducts,
    initialSubtotal,
}: Props) => {
    const cartStore = useCartStore((state) => state);

    useEffect(() => {
        cartStore.clearShipping();
    }, []);

    return (
        <div>
            <div className="flex items-center gap-2">
                <Image
                    src={"/assets/ui/shopping-bag-4-line-black.png"}
                    width={24}
                    height={24}
                    alt=""
                />
                <div className="text-lg">
                    Seu carrinho de compras
                    <span className="text-gray-500 ml-1">
                        (
                        {`${initialCartProducts.length} ${
                            initialCartProducts.length === 1 ? "item" : "itens"
                        }`}
                        )
                    </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">Produtos</div>
                <div className="flex-1 md:max-w-sm">Info</div>
            </div>
        </div>
    );
};
