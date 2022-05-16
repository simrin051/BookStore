import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
    const {
        _id,
        categoryName,
        description,
        image
    } = category;
    return (<div class="category">
        <Link to="/products">
            <img src={image} />
            <div className="topicname">{category.categoryName}</div>
        </Link>
    </div>);
}