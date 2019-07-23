import { ADD_PRODUCTS } from "./types";

// ADD PRODUCTS
export const addProducts = products => {
  return {
    type: ADD_PRODUCTS,
    payload: { products }
  };
};