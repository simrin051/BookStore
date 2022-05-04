import axios from "axios";

export const FetchProductList = async (productDispatch) => {
    try {
        const res = await axios.get("/api/products");
        if (res.status === 200)
            productDispatch({
                type: "GET_PRODUCTS",
                payload: res.data.products,
            });
    } catch (e) {
        console.log(e.error);
    }
};

export const FetchProduct = async (setProduct, productId) => {
    try {
        const res = await axios.get(`/api/products/${productId}`);
        setProduct(res.data.product);
    } catch (e) {
        console.log(e.error);
    }
};

export const AddToCart = async (product, productDispatch) => {
    try {
        const res = await axios.post(`/api/user/cart`, { product });
        if (res.status === 201) {
            productDispatch({
                type: "ADD_TO_CART",
                payload: res.data.cart,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export const removeProductFromCart = async (product, productDispatch) => {
    try {
        const res = await axios.delete(`/api/user/cart/` + product._id);
        if (res.status === 200) {
            productDispatch({
                type: "REMOVE_FROM_CART",
                payload: res.data.cart
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export const addProductToWishList = async (product, productDispatch) => {
    try {
        const res = await axios.post(`/api/user/wishlist`, { product });
        if (res.status === 201) {
            productDispatch({
                type: "ADD_TO_WISHLIST",
                payload: res.data.wishlist,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export const removeProductFromWishlist = async (product, productDispatch) => {
    try {
        const res = await axios.delete(`/api/user/wishlist/${product._id}`);
        if (res.status === 200) {
            productDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: res.data.wishlist
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export const FetchWishList = async (productDispatch) => {
    try {
        const res = await axios.get("/api/user/wishlist");
        if (res.status === 200)
            productDispatch({
                type: "GET_WISHLIST",
                payload: res.data.wishlist,
            });
    } catch (e) {
        console.log(e.error);
    }

}

export const updateQtyOfProduct = async (product, productDispatch, type) => {
    try {
        const res = await axios.post(`/api/user/cart/${product._id}`, { action: { type: type } });
        if (res.status === 200)
            productDispatch({
                type: "UPDATE_QTY",
                payload: res.data.cart,
            });
    } catch (e) {
        console.log(e.error);
    }
}