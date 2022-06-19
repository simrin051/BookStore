import { Navigate, useNavigate } from 'react-router-dom';
import { useProductContext } from '../../contexts/products';
import { AddToCart } from './../../services/products';
import './Buttons.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/user';


const AddProductToCart = (product, productDispatch,token,navigate) => {
 token?AddToCart(product, productDispatch):navigate("/signin");
}

const isAlreadyAddedToCart = (itemsInCart, product) => {
    if (itemsInCart) {
        return itemsInCart.find((item) => item._id === product._id);
    }
    return false;
}

export const AddToCartBtn = ({ product, productDispatch }) => {
    const { state } = useProductContext();
    const navigate = useNavigate();
    const { loginUser, state: { token } } = useUserContext();
     return (
        isAlreadyAddedToCart(state.itemsInCart, product) ? <button> <Link to='/cartlist' ><span>Go to cart</span></Link></button> :
            < button class="secondary-btn" onClick={() => AddProductToCart(product, productDispatch,token,navigate)} > <i class="fa fa-shopping-cart" aria-hidden="true"></i><span>Add To Cart</span></button >
    )
}