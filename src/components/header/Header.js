import React from "react";
import styled from 'styled-components';
import UserDetails from "../UserDetails";
import Navigation from "./Navigation";

  const HeadArea = styled.header`
      text-align: center;
      /* background-color: #575c00; */
      background-image: url('/images/meadow.webp');
      background-size: cover;
      background-position: center;
      color: rgba(255,255,255, 0.95);
      padding: 2rem;
      margin: 0;
      display: flex;
      justify-content: space-between;
      `
  
  const Heading1 = styled.h1`
      font-size: 2.6rem;
      text-shadow: 1px 2px 2px rgba(0, 0, 0, 1);
  `

const Header = ({ user }) => {

  return(
    <>
    <HeadArea>
          <Heading1>Auchnagatt Garden Club</Heading1>
          <UserDetails user={user} />
    </HeadArea>
    <Navigation />
    </>
  )
}

export default Header;