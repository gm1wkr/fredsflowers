import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CheckoutConfirm from "./CheckoutConfim";

const PayForm = styled.form`
  min-width: 94%;
  margin: 0 auto;
  padding: 2rem;
  background-color: beige;
  display: flex;
  flex-direction: column;

  &>label{
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    background-color: aliceblue;
    
      &>span{
        width: 40%;
        text-align: right;
        margin-right: 2rem;
      }
      &>input{
        width: 100%;
        font-size: 1.4rem;
        padding: 0.3rem;
      }
  }
`;

const CheckoutForm = ({ handleCheckout, user, basket }) => {

  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [cardNumber, setCardNumber] = useState();

  const handleNameInput = (event) => setUserName(event.target.value);
  const handleEmailInput = (event) => setEmail(event.target.value);
  const handleCardInput = (event) => setCardNumber(event.target.value);
  const handleSumbit = (event) => {
    event.preventDefault();
    handleCheckout();
  }

  if (basket.length >= 1){

    return(
      <>
      <h2>Checking Out</h2>
        <PayForm>
          <label htmlFor="userName"><span>User Name</span>
            <input required onChange={handleNameInput} id="userName" defaultValue={user.name} value={userName} type="text" />
          </label>
          <label htmlFor="email"><span>Email</span>
            <input required onChange={handleEmailInput} id="email" defaultValue={user.email} value={email} type="text" />
          </label>
          <label htmlFor="creditCard"><span>Card Number</span>
            <input required onChange={handleCardInput} id="creditCard" defaultValue="5555 5555 5555 5555" value={cardNumber} type="text" />
          </label>
          <label>
            <input onClick={handleSumbit} type="submit" value="Complete Order" />
          </label>
        </PayForm>
      </>
    )
    }else{
      return(  
      <>
          <h2>Thank You, {user.name}</h2>
          <p>Your order has been accepted.</p>
          <p><Link to="/shop">Continue Shopping ...</Link></p>
          <CheckoutConfirm basket={basket} />
      </>
        )
    }
}

export default CheckoutForm;