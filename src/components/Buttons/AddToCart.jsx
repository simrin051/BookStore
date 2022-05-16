import { Navigate } from 'react-router-dom';
import { useProductContext } from '../../contexts/products';
import { AddToCart } from './../../services/products';
import './Buttons.css';
import { Link } from 'react-router-dom';


const AddProductToCart = (product, productDispatch) => {
    AddToCart(product, productDispatch);
}

const isAlreadyAddedToCart = (itemsInCart, product) => {
    if (itemsInCart) {
        return itemsInCart.find((item) => item._id === product._id);
    }
    return false;
}

export const AddToCartBtn = ({ product, productDispatch }) => {
    const { state } = useProductContext();

    return (
        isAlreadyAddedToCart(state.itemsInCart, product) ? <button> <Link to='/cartlist' ><span>Go to cart</span></Link></button> :
            < button class="secondary-btn" onClick={() => AddProductToCart(product, productDispatch)} > <i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Add To Cart</span></button >
    );
}