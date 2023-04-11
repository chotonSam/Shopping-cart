import { ADDTOCART, CARTCOUNTER, DELETECART } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const { productId, products } = action.payload;

      if (state.some((el) => el.id === productId)) {
        const ubdateCount = state.map((el) => {
          if (el.id === productId) {
            return {
              ...el,
              count: el.count + 1,
            };
          }
          return el;
        });
        return ubdateCount;
      }
      const addNew = products.find((product) => {
        return product.id === productId;
      });

      addNew.count = 1;

      return [...state, addNew];

    case CARTCOUNTER:
      const { cartId, countType } = action.payload;
      const counter = state.map((el) => {
        if (el.id === cartId) {
          if (countType === "increase") {
            return {
              ...el,
              count: el.count + 1,
            };
          }
          if (countType === "decrease") {
            return {
              ...el,
              count: el.count - 1,
            };
          }
        }
        return el;
      });
      return counter;

    case DELETECART:
      return state.filter((value) => value.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
