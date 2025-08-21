import { Banners } from "@/components/home/banners";
import { InfoCards } from "@/components/home/infoCards";
import { ProductListSkeleton } from "@/components/home/productListSkeleton";
import { data } from "@/data";

export default function Page() {
    return (
        <div>
            <Banners list={data.banners} />
            <InfoCards />
            <ProductListSkeleton />
            <ProductListSkeleton />
        </div>
    );
}
