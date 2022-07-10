import React from "react";
import Basket from "../components/basket/Basket";
import ProductList from "../components/products/ProductList";
import styled from 'styled-components';

const MainArea = styled.main`
  display: flex;
  margin-bottom: 2rem;
`

const ShopContainer = ({ user, productList, basket, basketTotal, addToBasket, removeFromBasket }) => {
  return(
    
    <MainArea>
      <ProductList productList={productList} addToBasket={addToBasket} />
      <Basket basket={basket} basketTotal={basketTotal} removeFromBasket={removeFromBasket} />
    </MainArea>
  )
}

export default ShopContainer;