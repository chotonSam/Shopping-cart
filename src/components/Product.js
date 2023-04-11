import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/actions";
const Product = ({ single, products }) => {
  const { productName, catagory, image, price, quantity, id } = single;

  const [countValue, setCountValue] = useState(0);

  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    const cartId = carts.find((el) => {
      return el.id === id;
    });

    setCountValue(cartId?.count);
  }, [carts, id]);

  const dispatch = useDispatch();

  const addCartHandler = (id) => {
    dispatch(addToCart(id, products));
  };

  return (
    <div className="productCard">
      <img className="productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="productName">{productName}</h4>
        <p className="productCategory">{catagory}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY{" "}
            <span className="quantity">
              {countValue > 0 ? quantity - countValue : quantity}
            </span>
          </p>
        </div>
        {quantity - countValue <= 0 ? (
          <button
            disabled
            className="btnAddToCart"
            onClick={() => addCartHandler(id)}
          >
            Add To Cart
          </button>
        ) : (
          <button
            className="btnAddToCart"
            onClick={() => addCartHandler(id)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
