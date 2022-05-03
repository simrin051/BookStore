import axios from "axios";

export const FetchCategoryList = async (productDispatch) => {
    try {
        const res = await axios.get("/api/categories");
        if (res.status === 200)
            productDispatch({
                type: "GET_CATEGORIES",
                payload: res.data.categories,
            });
    } catch (e) {
        console.log(e.error);
    }
};
