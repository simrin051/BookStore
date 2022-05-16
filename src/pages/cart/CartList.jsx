import { useProductContext } from "../../contexts/products";
import { CartItemCard } from './../../components/Card/CartItemCard';

export const CartList = () => {
    const { state } = useProductContext();
    const cartProducts = state.itemsInCart;
    return (<div class="align-text-center">
        <span>Number of items in cart {cartProducts?.length}</span>
        {cartProducts?.map((product) => {
            return <CartItemCard class="product" key={product._id} product={product} />;
        })}
    </div>)
}