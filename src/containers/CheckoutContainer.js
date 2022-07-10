import React from "react";
import Basket from "../components/basket/Basket";
import BasketList from "../components/basket/BasketList";
import BasketTotal from "../components/basket/BasketTotal";
import styled from "styled-components";
import CheckoutForm from "../components/checkout/CheckoutForm";

const MainArea = styled.main`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const BasketWrap = styled.div`
  min-width: 20vw;
  margin-top: 1.6rem;
  margin-right: 1rem;;
  text-align: right;
`

const FormWrapper = styled.div`
  margin: 0 2rem;
  flex-grow: 1;
`

const CheckoutContainer = ({ basket, basketTotal, removeFromBasket, handleCheckout, user }) => {
  return(
    <>
      
      <MainArea>
        <FormWrapper>
          <CheckoutForm handleCheckout={handleCheckout} user={user} basket={basket} />
        </FormWrapper>
        <BasketWrap>
          <BasketTotal basket={basket} basketTotal={basketTotal} />
          <BasketList basket={basket} removeFromBasket={removeFromBasket} />
        </BasketWrap>
      </MainArea>
    
    </>
  )

}

export default CheckoutContainer;