import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
`;

const NavList = styled.ul`
  background-color: transparent;
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: left;
  height: 2rem;
  `;

const NavItem = styled.li`
  margin-right: 2rem;
  `;

const NavLink = styled.a`
  color: rgb(39, 41, 0);
  text-decoration: none;
  background-color: hsla(63, 42%, 74%, 0.648);
  height: 100%;
  padding: 0rem 2rem;
  border-top: 2px solid rgba(39, 41, 0, 0.695);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transition: all 0.3s linear;
  box-shadow: 0 0 1.1rem 0rem rgb(87, 92, 0);
  &:hover {
    background-color: hsl(48, 96%, 73%);
    box-shadow: 0 0 1.1rem 0.6rem rgba(87, 92, 0, 0.8);
  }
`;

const Navigation = () => {
  return(
    <nav>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>  
        </NavItem>
        <NavItem>
          <NavLink href="/shop">Shop</NavLink>  
        </NavItem>
      </NavList>
    </nav>
  )
}

export default Navigation;