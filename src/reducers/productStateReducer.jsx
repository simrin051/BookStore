export const productStateReducer = (state, { type, payload }) => {

    switch (type) {
        case "GET_PRODUCTS": return { ...state, productList: payload };
        case "UPDATE_QTY": return { ...state, itemsInCart: payload };
        case "GET_CATEGORIES": return { ...state, categoryList: payload };
        case "FILTER_PRODUCTS_BY_CATEGORY": return state.dataFilter.filterByCategories.includes(payload)
            ? {
                ...state,
                dataFilter: {
                    ...state.dataFilter,
                    filterByCategories: state.dataFilter.filterByCategories.filter(
                        (item) => item !== payload,
                    ),
                },
            }
            : {
                ...state,
                dataFilter: {
                    ...state.dataFilter,
                    filterByCategories:
                        state.dataFilter.filterByCategories.concat(payload),
                },
            };
        case 'SORT': {
            if (payload === 'HIGH_TO_LOW_PRICE') {
                return { ...state, sortBy: 'HIGH_TO_LOW_PRICE' };
            }
            if (payload === 'LOW_TO_HIGH_PRICE')
                return { ...state, sortBy: 'LOW_TO_HIGH_PRICE' };
            return { ...state, sortBy: '' };
        }
        case 'ADD_TO_CART': return {
            ...state, itemsInCart: payload
        }
        case 'REMOVE_FROM_CART': return {
            ...state, itemsInCart: payload
        }
        case 'GET_WISHLIST': return {
            ...state, itemsInWishList: payload
        }
        case 'ADD_TO_WISHLIST': return {
            ...state, itemsInWishList: payload
        }
        case 'REMOVE_FROM_WISHLIST': return {
            ...state, itemsInWishList: payload
        }
        case 'CLEAR_ALL_FILTERS': return {
            ...state,
            sortBy: '',
            ratingBy: '',
            dataFilter: {
                filterByCategories: []
            }
        }
        case 'FILTER_PRODUCTS_BY_RATING': return {
            ...state, ratingBy: payload
        }
        default: return { ...state };
    }
};