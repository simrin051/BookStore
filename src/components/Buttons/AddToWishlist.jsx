import './Buttons.css';

export const AddToWishlist = () => {
    return (
        <button className="like-btn" onClick={() => { AddToWishlist() }}>
            <span><i class="fa fa-heart" aria-hidden="true"></i></span>
        </button>
    );
}