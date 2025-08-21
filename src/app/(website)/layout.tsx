import { Header } from "@/components/layout/header/header";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main className="w-full max-w-6xl mx-auto p-6">{children}</main>
        </div>
    );
}
