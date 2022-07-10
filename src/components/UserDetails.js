import React from 'react';
import styled from 'styled-components';

const UserDetail = styled.div`
  background-color: rgba(254, 224, 76, 1);
  padding: 1rem;
  color: #333;
   
  box-shadow:  .3rem .3rem 0 0 black, .6rem .6rem 0 0 rgba(249, 223, 94, 1) ;

  & h3{
    color: currentColor;
    margin:0;
    padding: 0;
  }

  & p {
    margin:0;
    margin-top: 0.4rem;
  }

`;

const UserDetails = ({ user }) => {
  return (
    <UserDetail className="user">
      <h3>Welcome back, {user.name}</h3>
      <p>
        {user.isPremium ? "Gold Club Member" : "Join Premium Plant"}
      </p>
    </UserDetail>
    )

}

export default UserDetails;