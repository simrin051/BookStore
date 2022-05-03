import { useNavigate } from "react-router-dom";
import { AddToWishlist } from "../Buttons/AddToWishlist";
import { AddToCart, AddToCartBtn } from './../Buttons/AddToCart';
import '../../pages/products/ProductList.css';
import { useProductContext } from "../../contexts/products";
import { addProductToWishList } from './../../services/products';


export const ProductCard = ({ product, isAddedToCart }) => {
  console.log("inside product card");
  console.log(" is added to cart " + isAddedToCart);
  const { state, productDispatch } = useProductContext();

  const {
    _id,
    title,
    price,
    rating,
    categoryName,
    image
  } = product;
  return (
    <div class="item-container">
      <div class="item-image">
        <img src={image} />
      </div>
      <div class="item-details">
        <div class="item-title">{title}
          <i class="fr fa-solid fa-heart" onClick={() => addProductToWishList(product, productDispatch)} ></i>
        </div>
        <div class="item-price">Rs{" "}{price}</div>
        <div class="item-rating">{rating}{" "}<i class="fa-solid fa-star"></i></div>
      </div>
      <div class="item-action-btns">
        < AddToCartBtn product={product} productDispatch={productDispatch} />
      </div>
    </div>
  );
};