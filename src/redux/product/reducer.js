import { ADDPRODUCT } from "./actionTypes";
import initialState from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const { productName, catagory, image, price, quantity } = action.payload;
      return [
        ...state,
        {
          productName: productName,
          catagory: catagory,
          image: image,
          price: price,
          quantity: quantity,
          id: nextTodoId(state),
        },
      ];
    default:
      return state;
  }
};

export default reducer;
