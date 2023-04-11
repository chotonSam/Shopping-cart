import React from "react";
import { useDispatch } from "react-redux";
import { cartCounter, deleteCart } from "../redux/cart/actions";

const CartItem = ({ cart }) => {
  const { productName, catagory, image, price, id, count, quantity } = cart;

  const dispatch = useDispatch();

  const counterHandler = (cartType) => {
    dispatch(cartCounter(id, cartType));
  };

  const deleteHandler = () => {
    dispatch(deleteCart(id));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="cartImage" src={image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="cartName">{productName}</h4>
          <p className="cartCategory">{catagory}</p>
          <p>
            BDT <span className="cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          {count >= quantity ? (
            <button
              disabled
              className="incrementQuantity"
              onClick={() => counterHandler("increase")}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
          ) : (
            <button
              className="incrementQuantity"
              onClick={() => counterHandler("increase")}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
          )}

          <span className="cartQuantity">{count}</span>

          <button
            className="decrementQuantity"
            onClick={() => counterHandler("decrease")}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="calculatedPrice">{parseInt(price) * count}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="removeFromCart" onClick={deleteHandler}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
