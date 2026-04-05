import React, { useState } from "react";

export default function Child(props) {
  let { id, code, count, category, onSale, price } = props.productDetails;

  return (
    <>
      <h1>id : {id}</h1>
      <h2>code : {code}</h2>
      <h2>count : {count}</h2>
      <h2>Category : {category}</h2>
      <h2>onSale : {onSale}</h2>
      <h2>price :{price}</h2>
    </>
  );
}
