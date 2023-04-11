import React from "react";
import { useSelector } from "react-redux";
import Bill from "./Bill";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {carts.map(
              (cart) => cart.count > 0 && <CartItem cart={cart} key={cart.id} />
            )}
          </div>
          <Bill carts={carts} />
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
