export const filterProductReducer = (state, { type, payload }) => {
    switch (type) {
        case "FILTER_PRODUCTS_BY_CATEGORY": return { ...state, items: payload };
        case "SORT": return { ...state, items: payload };
        default: return state;
    }
}
