import React from "react";
import ProductForm from "./ProductForm";
import Products from "./Products";
const Home = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <Products />
        <ProductForm />
      </div>
    </main>
  );
};

export default Home;
