import { ImageSlider } from "@/components/products/imageSlider";
import { ProductDetails } from "@/components/products/productDetails";
import Link from "next/link";
import { data } from "@/data";
import { ProductDescription } from "@/components/products/productDescription";
import { Suspense } from "react";
import { RelatedProducts } from "@/components/products/relatedProducts";
import { RelatedProductsSkeleton } from "@/components/products/relatedProductsSkeleton";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            <div className="text-gray-500 mb-6">
                <Link href="/">Home</Link> &gt;{" "}
                <Link href="/products">Categoria</Link> &gt;{" "}
                {data.product.label}
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-32">
                <ImageSlider images={data.product.images} />
                <ProductDetails product={data.product} />
            </div>

            <ProductDescription text={data.product.description} />

            <Suspense fallback={<RelatedProductsSkeleton />}>
                <RelatedProducts id={data.product.id} />
            </Suspense>
        </div>
    );
}
