import { ADD_PRODUCTS, GET_RECIPES } from "../actions/types";

const initialState = {
  products: [],
  recipes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        products: action.payload.products
      };
    case GET_RECIPES:
      return {
        recipes: action.payload
      };

    default:
      return state;
  }
}
