import { useProductContext } from "../../contexts/products"
import { WishListItemCard } from './../../components/Card/WishListItemCard';

export const WishList = () => {
    const { state: { itemsInWishList } } = useProductContext();
    return (
        <div class="align-text-center">
            {itemsInWishList.length == 0 ? <span>Your wishlist is empty, continue shopping.</span> :
                <span>Number of items in wishlist {itemsInWishList.length}</span>}

            {itemsInWishList.map((product) => {
                return <WishListItemCard className="product" key={product._id} product={product} />
            })}
        </div>
    )
};