
import { createContext, useContext, useEffect, useReducer } from "react";
import { FetchCategoryList } from "../services/categories";
import { FetchProductList } from "../services/products";
//import { productStateReducer } from "../reducers/productStateReducer.js";
//import { fetchCategories, fetchProductList } from "../services";
import { productStateReducer } from './../reducers/productStateReducer';


const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
    const initialProductState = {
        productList: [],
        categoryList: []
    };
    const [productState, productDispatch] = useReducer(
        productStateReducer,
        initialProductState
    );

    useEffect(() => {
        FetchProductList(productDispatch);
        FetchCategoryList(productDispatch);
    }, []);
    return (
        <ProductContext.Provider value={{ productState, productDispatch }}>
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
