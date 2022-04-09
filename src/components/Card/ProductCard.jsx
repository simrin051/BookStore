import { useNavigate } from "react-router-dom";
import { AddToWishlist } from "../Buttons/AddToWishlist";
import { AddToCart } from './../Buttons/AddToCart';

export const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    price,
    categoryName,
    image
  } = product;
  return (
    <div class="item-container">
      <div class="item-image">
        <img src={image} />
      </div>
      <div class="item-details">
        <div class="item-title">{title}</div>
        <div class="item-price">{price}</div>
      </div>
      <div class="item-action-btns">
        <AddToCart />
        <AddToWishlist />
      </div>
    </div>
  );
};