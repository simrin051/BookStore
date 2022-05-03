import { useProductContext } from "../../contexts/products"
import { WishListItemCard } from './../../components/Card/WishListItemCard';

export const WishList = () => {
    const { state: { itemsInWishList }, productDispatch } = useProductContext();
    return (
        <div class="align-text-center">
            <span>Number of items in wishlist {itemsInWishList.length}</span>
            {itemsInWishList.map((product) => {
                return <WishListItemCard class="product" key={product._id} product={product} />
            })}
        </div>
    )
};