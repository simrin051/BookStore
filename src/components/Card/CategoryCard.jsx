export const CategoryCard = ({ category }) => {
    const {
        _id,
        categoryName,
        description,
        image
    } = category;
    return (<div class="category">
        <a href="/productlisting/productlisting.html">
            <img src={image} />
            <div className="topicname">{category.categoryName}</div>
        </a>
    </div>);
}