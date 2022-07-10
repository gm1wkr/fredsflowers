import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  max-width: 12rem;
  margin-top: 0.6rem;
  height: 12rem;
  border: 1px solid #ffffff99;
  box-shadow: 0.15rem 0.15rem  0.4rem -0rem rgba(0, 0, 0, 0.739);
`


const CardImage = ( {src, alt} ) => {
  return(
    <Image src={src} alt={alt} />
  )
}

export default CardImage;