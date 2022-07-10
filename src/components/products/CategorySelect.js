import React from "react";
import CategorySelectNodes from "./CategorySelectNodes";
import styled from "styled-components";

const CategorySelector = styled.div`
  width: 50vw;
  margin: auto;
  margin-top: 3rem;
  background-color: aquamarine;

  &>select{
    width: 100%;
    padding: 0.4rem 2rem;
    margin: 0 auto;
    font-size: 1.4rem;
    color: rgba(87, 92, 0, 1);
  }

`;



const ProductSelect = ({ productList, handleCategorySelect }) => {

  const categories = [... new Set(productList.map( (product) => product.category))];
  const categoryItems = categories.map( (category) => <CategorySelectNodes key={category} category={category} />);
  const handleCategory = (event) => handleCategorySelect(event.target.value);

  return (
    <CategorySelector>
    <select onChange={handleCategory}>
      <option value="All">All Categories</option>
      {categoryItems}
    </select>
    </CategorySelector>
  )
}

export default ProductSelect;