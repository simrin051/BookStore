import { createContext } from 'react';
import { filterProductReducer } from '../reducers/productFilterReducer';
import { useReducer } from 'react';
import { useContext } from 'react';

const FilteredProductContext = createContext();

const FilteredProductContextProvider = ({ children }) => {
    const initialProductsFilterState = {
        filteredProductList: [],
    };
    const [filterState, filterDispatch] = useReducer(
        filterProductReducer,
        initialProductsFilterState
    );

    return (
        <FilteredProductContext.Provider value={{ filterState, filterDispatch }}>
            {children}
        </FilteredProductContext.Provider>
    );
};

const useFilteredProductContext = () => {
    const context = useContext(FilteredProductContext);
    if (!context) {
        throw new Error(`useProductContext must be used inside a context provider`);
    }
    return context;
};


export { FilteredProductContextProvider, useFilteredProductContext };