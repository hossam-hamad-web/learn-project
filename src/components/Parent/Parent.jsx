import React, { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  const [products, setProducst] = useState([
    {
      id: 1,
      code: "2335",
      count: 2,
      category: "phones",
      onSale: false,
      price: "2000",
    },
    { id: 2, code: "5468", category: "phones", onSale: false, price: "2000" },
  ]);

  return (
    <>
      {products?.map((product) => (
        <Child productDetails={product} key={product.id} />
      ))}
    </>
  );
}
