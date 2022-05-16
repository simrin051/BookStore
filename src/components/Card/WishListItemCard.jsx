import { useProductContext } from "../../contexts/products";
import { removeProductFromWishlist } from "../../services/products";

export const WishListItemCard = ({ product }) => {
    const { state, productDispatch } = useProductContext();

    return (
        <div class="card-vertical">
            <div class="card-container-vertical">
                <button class="btn-close"><i onClick={() => removeProductFromWishlist(product, productDispatch)} class="fa-solid fa-xmark"></i></button>
                <div class="image-badge-container">
                    <img src={product.image} />

                    <span class="vertical-badge">New</span>
                </div>
                <div class="text-container">
                    <div class="sub-text-container">
                        <span class="content-title">{product.title}</span>
                        <span class="sub-title">{product.categoryName}</span>
                        <small>Rs {product.price}</small>
                        <div class="card-desc">
                            {product.category}
                        </div>
                    </div>
                    <div class="action-btn-container">
                        <button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}