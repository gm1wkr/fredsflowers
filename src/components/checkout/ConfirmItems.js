import React from "react";

const ConfirmItems = ({ item }) => {
  return(
    <>
      <li>{item.name} </li>
      <li>{item.price} x {item.quantity}</li>
    </>
  );
}

export default ConfirmItems;