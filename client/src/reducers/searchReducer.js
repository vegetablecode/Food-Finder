import { ADD_PRODUCTS } from "../actions/types";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        products: action.payload.products
      };

    default:
      return state;
  }
}
