import axios from "axios";

export const FetchProductList = async (productDispatch) => {
    try {
        console.log("inside services");
        console.log("inside fetch product list");
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
