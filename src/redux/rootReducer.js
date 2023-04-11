import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
