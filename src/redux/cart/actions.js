import { ADDTOCART, CARTCOUNTER, DELETECART } from "./actionTypes";

export const addToCart = (productId, products) => {
  return {
    type: ADDTOCART,
    payload: {
      productId,
      products,
    },
  };
};

export const cartCounter = (cartId, countType) => {
  return {
    type: CARTCOUNTER,
    payload: {
      countType,
      cartId,
    },
  };
};

export const deleteCart = (cartId) => {
  return {
    type: DELETECART,
    payload: cartId,
  };
};
