import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { StoreHydration } from "@/providers/storeHydration";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <StoreHydration />
            <Header />
            <main className="w-full max-w-6xl mx-auto p-6">{children}</main>
            <Footer />
        </div>
    );
}
