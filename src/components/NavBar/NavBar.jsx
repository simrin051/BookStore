import './NavBar.css';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../contexts/products';
//import { avatar } from '../images/avatar.jpg';

const showSideBar = () => {

    var sidebar = document.getElementById('sidebar');
    var display = document.getElementById('sidebar').style.display;
    sidebar.style.display = (display == 'block') ? 'none' : 'block';
    if (sidebar.style.display == 'block') {
        document.getElementById("menu-icon").style.display = 'none';
        document.getElementById("logo").style.display = 'none';
    } else {
        document.getElementById("menu-icon").style.display = 'block';
        document.getElementById("logo").style.display = 'block';
    }
}

export const NavBar = () => {
    const { state } = useProductContext();
    const cartProducts = state.itemsInCart;
    return (
        <div>
            <nav id="horizontal-navbar">
                <ul>
                    <li><a class="active fl nav-icon" href="#home"><i class="logo">Books Train</i></a></li>
                    <li><Link to='/signin' class="fr nav-icon" onClick={() => SignOut()}><i class="fa fa-sign-out fa-2x" aria-hidden="true" title="Sign Out"></i></Link></li>
                    <li><Link to="/home" class="fr nav-icon"><i class=" fa fa-home fa-2x" aria-hidden="true"></i></Link></li>
                    <li><Link
                        to='/wishlist' class="fr nav-icon iconwithbadge"><i class=" fa fa-heart fa-2x"></i> <span class="iconbadge">{state.itemsInWishList.length}
                        </span></Link></li>
                    <li><Link to='cartlist' class="fr nav-icon iconwithbadge"><i class=" fa fa-shopping-cart fa-2x" aria-hidden="true"></i> <span class="iconbadge">{cartProducts.length}
                    </span></Link></li>
                    <li><Link to='/signin' class="fr nav-icon"><i class="fa fa-user fa-2x" aria-hidden="true"></i></Link></li>
                </ul>
            </nav>
            <nav id="horizontal-sidebar-sm">
                <ul>
                    <li id="menu-icon"><a class="nav-icon fl"><i class="fa-solid fa-bars  fa-3x" onClick={showSideBar}></i></a></li>
                    <li id="logo"><a class="active fl nav-icon" href="#home"><i class="logo">Books Train</i></a></li>
                    <li><Link
                        to='/wishlist' id="wish-icon" class="fr nav-icon iconwithbadge"><i class=" fa fa-heart fa-2x"></i> <span class="iconbadge">{state.itemsInWishList.length}
                        </span></Link></li>
                    <li><Link to='cartlist' id="cart-icon" class="fr nav-icon iconwithbadge"><i class=" fa fa-shopping-cart fa-2x" aria-hidden="true"></i> <span class="iconbadge">{cartProducts.length}
                    </span></Link></li>
                    <div class="sidebar" id="sidebar">
                        <div class="sideheader">
                            <i class="fl fa-solid fa-circle-user fa-2x"></i>
                            <i class="fr fa-solid fa-xmark" onClick={showSideBar}></i>
                        </div>
                        <br /><br />
                        <ul class="nav-links">
                            <li><Link to="/home" class="fr nav-icon"><i class=" fa fa-home fa-2x ml-2" aria-hidden="true"></i>Home </Link></li>
                            <li><Link to='/signin' class="fr nav-icon"><i class="fa fa-user fa-2x mr-2" aria-hidden="true"></i>Signin</Link></li>
                            <li><Link to='/signin' class="fr nav-icon" onClick={() => SignOut()}><i class="fa fa-sign-out fa-2x mr-2" aria-hidden="true" title="Sign Out"></i>Signout</Link></li>
                        </ul>

                    </div>

                </ul>
            </nav>
        </div>
    );
};

const SignOut = () => {
    localStorage.removeItem('session');
};