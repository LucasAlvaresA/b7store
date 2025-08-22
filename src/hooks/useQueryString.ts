import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return {
        get: (attribute: string) => {
            return searchParams.get(attribute);
        },
        set: (attribute: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value) {
                params.set(attribute, value);
            } else {
                params.delete(attribute);
            }
            router.push(`${pathname}?${params.toString()}`);
        },
    };
};
