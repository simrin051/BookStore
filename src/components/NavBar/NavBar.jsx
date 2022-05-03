import './NavBar.css';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../contexts/products';
export const NavBar = () => {
    const { state } = useProductContext();
    const cartProducts = state.itemsInCart;
    return (<nav>
        <ul>
            <li><a class="active fl nav-icon" href="#home"><i class="logo">Books Train</i></a></li>
            <li><Link to='/signin' class="fr nav-icon" onClick={() => SignOut()}><i class="fa fa-sign-out fa-2x" aria-hidden="true" title="Sign Out"></i></Link></li>
            <li><a href="#" class="fr nav-icon"><i class=" fa fa-home fa-2x" aria-hidden="true"></i></a></li>
            <li><Link
                to='/wishlist' class="fr nav-icon iconwithbadge"><i class=" fa fa-heart fa-2x"></i> <span class="iconbadge">{state.itemsInWishList.length}
                </span></Link></li>
            <li><Link to='cartlist' class="fr nav-icon iconwithbadge"><i class=" fa fa-shopping-cart fa-2x" aria-hidden="true"></i> <span class="iconbadge">{cartProducts.length}
            </span></Link></li>
            <li><Link to='/signin' class="fr nav-icon"><i class="fa fa-user fa-2x" aria-hidden="true"></i></Link></li>
        </ul>
    </nav>);
};

const SignOut = () => {
    localStorage.removeItem('session');
};