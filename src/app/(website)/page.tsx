import { Banners } from "@/components/home/banners";
import { InfoCards } from "@/components/home/infoCards";
import { MostSoldProducts } from "@/components/home/mostSoldProducts";
import { MostViewedProducts } from "@/components/home/mostViewedProducts";
import { ProductListSkeleton } from "@/components/home/productListSkeleton";
import { data } from "@/data";
import { Suspense } from "react";

export default function Page() {
    return (
        <div>
            <Banners list={data.banners} />
            <InfoCards />
            <Suspense fallback={<ProductListSkeleton />}>
                <MostViewedProducts />
            </Suspense>
            <Suspense fallback={<ProductListSkeleton />}>
                <MostSoldProducts />
            </Suspense>
        </div>
    );
}
