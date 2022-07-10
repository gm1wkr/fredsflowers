import React from 'react';
import styled from 'styled-components';

const TotalPrice = styled.p`
    font-size: 1.6rem;
    text-align: center;
    background-color: rgba(241, 191, 27, 0.745);
    border-radius: 0.4rem;
    margin: 0;
    margin-top: 3rem;
`

const BasketTotal = ({ basketTotal }) => {

    

    return(
        <TotalPrice>
            Order total: £{basketTotal.toFixed(2)}
        </TotalPrice>
    )
}

export default BasketTotal;