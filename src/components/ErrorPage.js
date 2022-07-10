import React from "react";
import styled from "styled-components";

const ErrorBox = styled.div`
  width: 60vw;
  margin: 3rem auto;
  border: 1px solid #f30;

  &>h2{
    color: #f30;
    text-transform: capitalize;
    text-align: center;
  }

  &>p {
    max-width: 60ch;
    margin: 0 4rem;
    padding-bottom: 2rem;;
  }
`;

const ErrorPage = () => {
  return(
  <ErrorBox>
    <h2>Error: Page Not Found</h2>
    <p>The page you requested can not be found.  Please check you typed the address in correctly.</p>
  </ErrorBox>
  );
}

export default ErrorPage;