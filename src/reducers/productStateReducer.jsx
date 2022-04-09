export const productStateReducer = (state, { type, payload }) => {
    console.log("inside product state reducer");
    switch (type) {
        case "GET_PRODUCTS": return { ...state, productList: payload };
        case "GET_CATEGORIES": return { ...state, categoryList: payload };
        default: return { ...state };
    }
};