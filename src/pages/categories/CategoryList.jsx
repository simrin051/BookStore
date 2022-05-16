import { useProductContext } from "../../contexts/products";
import { CategoryCard } from './../../components/Card/CategoryCard';
import './CategoryList.css';

export const CategoryList = () => {
    const {
        state: { categoryList },
    } = useProductContext();

    return (
        <div>
            <h2 class="align-text-center primary-color">Categories</h2>
            <div class="featured-categories">
                {categoryList.map((category) => {
                    return <CategoryCard key={category._id} category={category} />;
                })}
            </div>
        </div>);
}