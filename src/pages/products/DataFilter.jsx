import { useProductContext } from '../../contexts/products';
import './ProductList.css';
import { useState } from 'react';


let sum = 0;
export const noOfRatingStarsChecked = () => {

    const ratingStars = document.querySelectorAll(
        '.rating-star-input',
    );
    ratingStars.forEach((star) => {
        if (star.checked) sum += 1;
    });
    return sum;
}

export const getFilteredData = (state, data) => {
    let newData = [...data];

    if (state.dataFilter.filterByCategories.length !== 0)
        newData = newData.filter((product) =>
            state.dataFilter.filterByCategories.includes(product.categoryName),
        );
    return newData;
};


export const getSortedData = (state, data) => {
    if (state.sortBy === 'HIGH_TO_LOW_PRICE') {
        return [...data].sort((product1, product2) => {
            return Number(product2.price) - Number(product1.price);
        });
    }
    if (state.sortBy === 'LOW_TO_HIGH_PRICE') {
        return [...data].sort((product1, product2) => {
            return Number(product1.price) - Number(product2.price);
        });
    }

};


export const getRatingFilteredData = (state, data) => {
    if (state.dataFilter.filterByCategories.length !== 0)
        data = data.filter((product) =>
            state.dataFilter.filterByCategories.includes(product.categoryName),
        );

    data = data.filter((product) =>
        product.rating >= state.ratingBy
    );
    return data;
}

export const DataFilter = () => {
    const { state, productDispatch } = useProductContext();
    const [filterOpen, setFilterOpen] = useState(false);
    const [ratings, setRatings] = useState(0);

    const sortByPrice = (e) => {
        productDispatch({ type: 'SORT', payload: e.target.value }); /** LOW_TO_HIGH_PRICE is passed as payload. This  **/
    }
    return (<div class="product-filters">
        <div class="filters-title-section" onClick={() => setFilterOpen(filterOpen => !filterOpen)}>
            <h3>FILTERS</h3>
            <h6 class="clear_all" onClick={() => {
                productDispatch({
                    type: 'CLEAR_ALL_FILTERS',
                    payload: '',
                });
            }}>CLEAR ALL</h6>
        </div>
        <div className={`category-filter ${filterOpen ? 'open-filter' : 'close-filter'}`}>
            <label>
                <input
                    type="radio"
                    name="sort"
                    value='HIGH_TO_LOW_PRICE'
                    checked={'HIGH_TO_LOW_PRICE' === state.sortBy} /** For auto check **/
                    onChange={sortByPrice}
                ></input>{" "}
                Price - High to Low
            </label>
            <label>
                <input
                    type="radio"
                    name="sort"
                    value='LOW_TO_HIGH_PRICE'
                    checked={'LOW_TO_HIGH_PRICE' === state.sortBy} /** For auto check **/
                    onChange={sortByPrice}
                ></input>{" "}
                Price - Low to High
            </label>

            {state.categoryList.map((category) => {
                return (
                    <div>
                        <label for={category.categoryName} class="category-label">
                            <input type="checkbox" id={category.categoryName} name={category.categoryName} value={category.categoryName}
                                onClick={() => {
                                    productDispatch({
                                        type: 'FILTER_PRODUCTS_BY_CATEGORY',
                                        payload: category.categoryName,
                                    });
                                }} />
                            {category.categoryName}
                        </label></div>);
            })}
            <h2>Ratings</h2>

            <label>
                <input
                    type="radio"
                    name="rating"
                    checked={'4' === state.ratingBy}
                    onChange={() => productDispatch({
                        type: 'FILTER_PRODUCTS_BY_RATING',
                        payload: '4'
                    })}
                ></input>{" "}
                4 Star & above
            </label>
            <label>
                <input
                    type="radio"
                    name="rating"
                    checked={'3' === state.ratingBy} /** For auto check **/
                    onChange={() => productDispatch({
                        type: 'FILTER_PRODUCTS_BY_RATING',
                        payload: '3'
                    })}
                ></input>{" "}
                3 Star & above
            </label>
            <label>
                <input
                    type="radio"
                    name="rating"
                    checked={'2' === state.ratingBy} /** For auto check **/
                    onClick={() => productDispatch({
                        type: 'FILTER_PRODUCTS_BY_RATING',
                        payload: '2'
                    })}
                ></input>{" "}
                2 Star & above
            </label>
            <label>
                <input
                    type="radio"
                    name="rating"
                    checked={'1' === state.ratingBy} /** For auto check **/
                    onClick={() => productDispatch({
                        type: 'FILTER_PRODUCTS_BY_RATING',
                        payload: '1'
                    })}
                ></input>{" "}
                1 Star & above
            </label>

        </div>
    </div >
    );
}