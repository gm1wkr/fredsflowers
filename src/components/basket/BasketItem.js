import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    margin: 0;
    padding: 0;
    padding-left: 2rem;;
    border-top: 1px solid rgba(87, 92, 0, 0.3);
    
    &>h3{
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;

    }

    &>h3>strong {
        color: #f00;
        font-weight: bold;
        font-size: 1.6rem;
        vertical-align: middle;
    }
`;

const RemoveButton = styled.button`
  display: inline-block;
  margin-bottom: 1rem;
  padding: .5rem 1rem 0 .5rem; 
  font-size: 1.0rem;
  border: none;
  background-color: transparent;
  border-radius: 0.6rem;
  transition: all 0.6s linear;
  &:hover {
    background-color: #ccc;
  }
`;

const ItemDetail = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>span.price{
        border-top: 1px solid rgba(87, 92, 0, 0.3);
        border-bottom: 1px solid rgba(87, 92, 0, 0.3);
        font-size: 1.42rem;
    }
`;

const BasketItem = ({ basketItem, removeFromBasket }) => {

    const itemPrice = basketItem.price * basketItem.quantity;

    return(
        <ListItem>
            <h3><strong>{basketItem.quantity}</strong> <span>{basketItem.name}</span> </h3>
            <ItemDetail>
                <span className="price">£{itemPrice.toFixed(2)}</span>
                <span>
                    <RemoveButton onClick={() => removeFromBasket(basketItem)} >
                        &#10060;&nbsp; 
                        {basketItem.quantity === 1 ? "Remove" : "Remove 1"}
                    </RemoveButton>
                </span>
            </ItemDetail>
        </ListItem>
    )
}

export default BasketItem;