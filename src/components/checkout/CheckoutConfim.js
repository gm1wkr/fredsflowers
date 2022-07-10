import React from "react";
import ConfirmItems from "./ConfirmItems";

const CheckoutConfirm = ({ basket }) => {

  const itemNodes = basket.map( (item) => {
    <ConfirmItems item={item} />
  }

  );

  return(
    <>
      <ul>
        {itemNodes}
      </ul>
    </>
  );
}

export default CheckoutConfirm;