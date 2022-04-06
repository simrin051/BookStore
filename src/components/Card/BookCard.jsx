import { useNavigate } from "react-router-dom";
import { useProductContext, useUserContext } from "../../context";
import { addToCart, addToWishlist, removeFromWishlist } from "../../services";
import { inCart, inWhisList } from "../../utils/cart.utils";
import { ButtonPrimary, OutlineButtonPrimary } from "../buttons";
import { Rating } from "../rating/Rating";

export const BookCard = ({ product }) => {
  const {
    _id,
    title,
    artist,
    img: img_src,
    original_price,
    price,
    rating,
    rated_by,
    desc: item_desc,
    categoryName,
    inStock,
    fastDelivery,
  } = product;
  const navigate = useNavigate();
  const { loginState } = useUserContext();
  const {
    productState: { wishList, cart },
    productDispatch,
  } = useProductContext();

  return (
    <div class="main-card-container">
    <div class="card-horizontal">
        <div class="card-container-horizontal">
            <div class="image-badge-container">
                <img src="/assets/cardimage.jpg">
                <span class="badge">New</span>
            </div>
            <div class="text-container">
                <div class="sub-text-container">
                    <span class="content-title">Pink Dress</span>
                    <span class="sub-title">Girls Digital Printed Dress</span>
                    <small>Sold by: Lil Picks</small>
                    <div class="card-desc">
                        Green and blue printed frok, sleeveless
                    </div>
                </div>
                <div class="action-btn-container">
                    <button  onClick={() => {
                         addToCart({ product, productDispatch })
                         }}><i class="fas fa-shopping-cart" aria-hidden="true"></i>Add to Cart</button>
                    <button class="wish-btn">Move to Wishlist</button>
                </div>
            </div>
        </div>
    </div>
  </div>      
  );
};