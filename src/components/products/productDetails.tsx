"use client";

import { ProductComplete } from "@/types/product";
import Image from "next/image";

type Props = {
    product: ProductComplete;
};

const sizes = ["P", "M", "G", "GG"];

export const ProductDetails = ({ product }: Props) => {
    const addToCart = () => {};

    return (
        <div className="flex-1">
            <div className="text-xs text-gray-500 mb-2">Cód: {product.id}</div>

            <div className="font-bold text-3xl mb-2">{product.label}</div>

            <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">
                    Selecione o tamanho:
                </div>
                <div className="flex gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-gray-400 line-through text-sm">
                de R$ {(product.price + 30).toFixed(2)}
            </div>
            <div className="font-bold text-3xl text-blue-600 mb-2">
                R$ {product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500 mb-6">
                Forma de pagamento via PIX
            </div>

            <div className="flex gap-4 items-center">
                <button
                    onClick={addToCart}
                    className="flex-1 max-w-xs bg-blue-600 text-white py-4 px-8 rounded-md cursor-pointer hover:opacity-90 transition"
                >
                    Adicionar à sacola
                </button>
                <div className="size-14 border border-gray-300 cursor-pointer flex justify-center items-center rounded-sm">
                    <Image
                        src={"/assets/ui/heart-3-line.png"}
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
                <div className="size-14 border border-gray-300 cursor-pointer flex justify-center items-center rounded-sm">
                    <Image
                        src={"/assets/ui/share-line.png"}
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
};
