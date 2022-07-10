import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="user">
      <h3>Welcome back, {user.name}</h3>
      <p>
        {user.isPremium ? "Premium Club Member" : "Join Premium Plant"}
      </p>
    </div>
    )

}

export default UserDetails;