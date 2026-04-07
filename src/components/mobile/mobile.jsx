import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Mobile() {
  const [products, setProducts] = useState([]);

  function getProudct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, isLoading } = useQuery({
    queryKey: ["Product"],
    queryFn: getProudct,
  });

  if (isLoading) {
    return "Laoding ........";
  }
  return (
    <div>
      {data?.data?.data?.map((product) => (
        <div key={product?.id}>
          <img width={150} src={product.imageCover} alt="" />
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
}
