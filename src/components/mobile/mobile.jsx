import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Mobile() {
  const [products, setProducts] = useState([]);
  
  async function getProudct() {
    let data = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`,
    );

    console.log(data.data.data);
    setProducts(data.data.data);
  }

  useEffect(() => {
    getProudct();
  }, []);
  return (
    <div>
      {products?.map((product) => (
        <div key={product?.id}>
          <img src={product.imageCover} alt="" />
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}
