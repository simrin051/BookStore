import { useProductContext } from "../../contexts/products";
import { ProductCard } from './../../components/Card/ProductCard';
import './ProductList.css';

export const ProductList = () => {
    const {
        productState: { productList },
    } = useProductContext();

    return (
        /** Filters **/
        <div>
            <div>
                <div class="product-filters">
                    <div class="filter-clear">
                        <h3>FILTERS</h3>
                        <h6 class="clear_all">CLEAR ALL</h6>
                    </div>
                    <div class="category-filter">
                        <h3>CATEGORY</h3>
                        <label for="comedy" class="category-label">
                            <input type="checkbox" id="comedy" name="comedy" value="Comedy" />
                            Comedy
                        </label>
                        <label for="fictional" class="category-label">
                            <input type="checkbox" id="fictional" name="fictional" value="fictional" />
                            Fictional
                        </label>
                        <label for="nonfictional" class="category-label">
                            <input type="checkbox" id="nonfictional" name="nonfictional" value="nonfictional" />
                            Non Fictional
                        </label>
                        <label for="motivational" class="category-label">
                            <input type="checkbox" id="motivational" name="motivational" value="motivational" />
                            Motivational
                        </label>
                    </div>
                    <div class="availability-filter">
                        <h3>AVAILABILITY</h3>
                        <label for="comedy" class="category-label">
                            <input type="checkbox" id="comedy" name="comedy" value="Comedy" />
                            Include out of stock
                        </label>
                        <label for="fictional" class="category-label">
                            <input type="checkbox" id="fictional" name="fictional" value="fictional" />
                            Fast delivery only
                        </label>
                    </div>
                </div>
                <div className="items-container">
                    {productList.map((product) => {
                        return <ProductCard key={product._id} product={product} />;
                    })}
                </div>
            </div>
        </div>
    );
};