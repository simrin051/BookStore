
import { createContext, useContext, useEffect, useReducer } from "react";
import { FetchCategoryList } from "../services/categories";
import { FetchProductList, FetchWishList } from "../services/products";
import { productStateReducer } from './../reducers/productStateReducer';

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
    const initialProductState = {
        productList: [],
        categoryList: [],
        orders: [],
        itemsInCart: [],
        itemsInWishList: [],
        sortBy: 'LOW_TO_HIGH_PRICE',
        ratingBy: '3',
        dataFilter: {
            filterByCategories: [],
        },
        applySearch: '',
    };
    const [state, productDispatch] = useReducer(
        productStateReducer,
        initialProductState
    );

    useEffect(() => {
        FetchProductList(productDispatch);
        FetchCategoryList(productDispatch);
        FetchWishList(productDispatch);
    }, []);
    return (
        <ProductContext.Provider value={{ state, productDispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(`useProductContext must be used inside a context provider`);
    }
    return context;
};

export { ProductContextProvider, useProductContext };
