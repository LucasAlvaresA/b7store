import { ProductListFilter } from "@/components/categories/productListFilter";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
    const { slug } = await params;
    const filters = await searchParams;

    return (
        <div className="">
            <div className="text-gray-500 mb-6">
                <Link href="/">Home</Link> &gt; Temporário
            </div>

            <ProductListFilter />
        </div>
    );
}
