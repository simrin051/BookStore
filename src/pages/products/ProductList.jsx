import { useProductContext } from "../../contexts/products";
import { ProductCard } from './../../components/Card/ProductCard';
import './ProductList.css';
import { DataFilter, getFilteredData, getRatingFilteredData, getSortedData } from './DataFilter';
import { products } from './../../backend/db/products';

export const ProductList = () => {
    const { state } = useProductContext();
    const sortedData = getSortedData(state, state.productList);
    let filteredData = getRatingFilteredData(state, sortedData);
    const checkWhetherProductIsInTheCart = (id, products) => {
        if (products) {
            return products.find((item) => item._id === id);
        }
        return false;
    }
    return (
        <div>
            <div>
                <div class="filter-section">
                    <DataFilter />
                </div>
                {filteredData.length === 0 ? (
                    <h6 className=''>
                        No Products Found
                    </h6>
                ) : (
                    <div className='items-container'>
                        {filteredData.map((product) => {
                            console.log("product title " + product.title);
                            console.log("checkWhetherProductIsInTheCart " + checkWhetherProductIsInTheCart(product));
                            return <ProductCard class="product" isAddedToCart={checkWhetherProductIsInTheCart(product._id, products)} key={product._id} product={product} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};