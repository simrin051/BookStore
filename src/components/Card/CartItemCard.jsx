import { useProductContext } from "../../contexts/products";
import { removeProductFromCart } from "../../services/products";
import { addProductToWishList, updateQtyOfProduct } from './../../services/products';

const removeFromCart = (product, productDispatch) => {
    removeProductFromCart(product, productDispatch);
}

const addToWishList = (product, productDispatch) => {
    removeProductFromCart(product, productDispatch);
    addProductToWishList(product, productDispatch);
}

const CountQuantityOfProduct = (product, productDispatch, type) => {
    const { cart: userCart } = updateQtyOfProduct(product, productDispatch, type);
    console.log(" updated" + product.qty);
}

export const CartItemCard = ({ product }) => {
    const { state, productDispatch } = useProductContext();
    return (
        <div class="card-horizontal">
            <div class="card-container-horizontal">
                <div class="image-badge-container">
                    <img src={product.image} />
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
                        <div class="set-quantity">
                            <span class="qty-update-btn"><i class="fa fa-plus" onClick={() => CountQuantityOfProduct(product, productDispatch, "increment")}></i></span>
                            <button>{product.qty}</button>
                            <span class="qty-update-btn"><i class="fa fa-minus" onClick={() => CountQuantityOfProduct(product, productDispatch, "decrement")}></i></span>
                        </div>
                        <button class="wish-btn" onClick={() => addToWishList(product, productDispatch)}>Move to Wishlist</button>
                        <span><i onClick={() => removeFromCart(product, productDispatch)} class="fa-solid fa-trash"></i></span>
                    </div>
                </div>
            </div></div >)
}