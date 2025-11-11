import { CartListItem } from "@/types/cartListItem";
import { CartProductItem } from "./cartProductItem";

type Props = {
    initialList: CartListItem[];
};

export const CartProductList = ({ initialList }: Props) => {
    return (
        <div className="bg-white border md:border-b-0 border-gray-200">
            {initialList.map((item) => (
                <CartProductItem key={item.product.id} item={item} />
            ))}
        </div>
    );
};
