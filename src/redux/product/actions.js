import { ADDPRODUCT } from "./actionTypes";

export const addProduct = (value) => {
  return {
    type: ADDPRODUCT,
    payload: value,
  };
};
