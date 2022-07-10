import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  min-height: 4rem;
`


const Footer = ({ user }) =>{
  return(
    <FooterArea>
      {user.name}
      {user.isPremium ? "Premium User" : "Join Premium Plant"}

    </FooterArea>
  )
}

export default Footer;