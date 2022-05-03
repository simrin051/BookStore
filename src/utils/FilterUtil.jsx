import { useProductContext } from "../contexts/products";


export const GetFilteredProductList = () => {
    const {
        productState: { productList },
    } = useProductContext();

    const filterFunction = (text) => {
        const filteredProducts = productList.filter((product) => product.categoryName == text)
    }
}