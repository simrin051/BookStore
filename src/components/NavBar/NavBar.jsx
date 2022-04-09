
export const NavBar = () => {
    return (<nav>
        <ul>
            <li><a class="active fl" href="#home"><i class="logo icon">Books Train</i></a></li>
            <li><a class="fr" href="/signin/signin.html"><i class="icon fa fa-sign-out fa-2x" aria-hidden="true" title="Sign Out"></i></a></li>
            <li><a href="#" class="fr"><i class="icon fa fa-home fa-2x" aria-hidden="true"></i></a></li>
            <li><a href="/wishlist/wishlist.html" class="fr"><i class="icon fa fa-heart fa-2x"></i></a></li>
            <li><a href="/cart/cart.html" class="fr"><i class="icon fa fa-shopping-cart fa-2x" aria-hidden="true"></i></a></li>
            <li><a href="#" class="fr"><i class="icon fa fa-user fa-2x" aria-hidden="true"></i></a></li>
        </ul>
    </nav>);
};