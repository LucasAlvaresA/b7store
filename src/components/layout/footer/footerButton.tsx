import Image from "next/image";
import Link from "next/link";

type Props = {
    href?: string;
    icon: string;
    label?: string;
    onClick?: () => void;
};

export const FooterButton = ({ href, icon, label, onClick }: Props) => {
    const content = (
        <div
            className="flex items-center gap-4 border border-gray-700 rounded-sm p-4 hover:bg-gray-900 cursor-pointer"
            onClick={onClick}
        >
            <Image src={icon} alt="" width={24} height={24} />
            {label && <div className="flex-1">{label}</div>}
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : content;
};
