import React, {useState} from "react";
import Product from './Product';
import styled from 'styled-components';
import ProductSelect from "./CategorySelect";

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
`

const ProductList = ({ productList, addToBasket }) => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = ( category ) => {
        setSelectedCategory(category);
    }

    // filter by category.
    const productListFiltered = productList.filter( (filteredProduct) => filteredProduct.category === selectedCategory)
    // console.log(productListFiltered);
    
    const productsToShow = selectedCategory === "All" ? productList : productListFiltered;
    const productNodes = productsToShow.map( (product) => <Product key={product.id} product={product} addToBasket={addToBasket} />)
   
 

  return ( 

        <div>
            <ProductSelect productList={productList} handleCategorySelect={handleCategorySelect} />
            <ProductGrid>
                {productNodes}
            </ProductGrid>
        </div>
    )
}

export default ProductList;