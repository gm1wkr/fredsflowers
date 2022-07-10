import { createGlobalStyle } from "styled-components"; 

const GlobalStyle = createGlobalStyle`
  body{
    background-color: rgba(87, 92, 0, 0.109);
    height: 2px;
  }

  h2, h3, h4{
    color: rgba(87, 92, 0, 1);
  } 
`;

export default GlobalStyle;