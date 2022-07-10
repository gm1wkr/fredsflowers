import React from "react";

const CategorySelectNodes = ( { category } ) => {
  return(
    <option value={category}>{category}</option>
  );
}

export default CategorySelectNodes;