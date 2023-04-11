import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="productContainer" id="productContainer">
      {products.map((single) => (
        <Product key={single.id} single={single} products={products} />
      ))}
    </div>
  );
};

export default Products;
