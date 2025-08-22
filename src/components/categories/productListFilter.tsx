"use client";

import { useQueryString } from "@/hooks/useQueryString";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FilterGroup } from "./filterGroup";

export const ProductListFilter = () => {
    const queryString = useQueryString();
    const [filterOpened, setFilterOpened] = useState(false);

    const order = queryString.get("order") ?? "views";

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        queryString.set("order", e.target.value);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="text-3xl">
                    <strong>99</strong> Produtos
                </div>
                <div className="flex flex-row w-full md:max-w-70 gap-5">
                    <select
                        defaultValue={order}
                        onChange={handleSelectChange}
                        className="h-14 flex-1 flex items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
                    >
                        <option value="views">Populariedade</option>
                        <option value="price">Por Preço</option>
                        <option value="selling">Mais Vendidos</option>
                    </select>
                    <div
                        className="h-14 flex-1 flex md:hidden items-center justify-between px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
                        onClick={() => setFilterOpened(!filterOpened)}
                    >
                        Filtrar
                        <Image
                            src="/assets/ui/equalizer-2-line.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div
                    className={`flex-1 md:max-w-70 ${
                        filterOpened ? "block" : "hidden"
                    } md:block`}
                >
                    <FilterGroup id="tech" name="Tecnologias" />
                    <FilterGroup id="color" name="Cores" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
                    <div className="">produto</div>
                    <div className="">produto</div>
                    <div className="">produto</div>
                    <div className="">produto</div>
                </div>
            </div>
        </div>
    );
};
