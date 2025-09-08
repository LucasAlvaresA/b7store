import { getCartState } from "@/actions/getCartState";
import { getProductsFromList } from "@/actions/getProductsFromList";
import { CartContainer } from "@/components/cart/cartContainer";
import { CartListItem } from "@/types/cartListItem";
import { redirect } from "next/navigation";

export default async function Page() {
    const { cart: initialCart } = await getCartState();

    if (initialCart.length === 0) {
        redirect("/");
        return null;
    }

    let cartProducts: CartListItem[] = [];
    let subtotal: number = 0;

    const ids = initialCart.map((item) => item.productId);
    const products = await getProductsFromList(ids);

    for (let cartItem of initialCart) {
        let prodIndex = products.findIndex((i) => i.id === cartItem.productId);
        if (prodIndex > -1) {
            cartProducts.push({
                product: products[prodIndex],
                quantity: cartItem.quantity,
            });
            subtotal += products[prodIndex].price * cartItem.quantity;
        }
    }

    return (
        <CartContainer
            initialCartProducts={cartProducts}
            initialSubtotal={subtotal}
        />
    );
}
