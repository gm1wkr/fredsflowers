import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  min-height: 6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #575c00;
  color: #fff;

  & > p{
    margin-left: 4rem;
  }
`;


const Footer = ({ user }) =>{
  return(
    <FooterArea>
      <p>{user.name}</p>
      <p>{user.isPremium ? "Premium User" : "Join Premium Plant"}</p>

    </FooterArea>
  )
}

export default Footer;