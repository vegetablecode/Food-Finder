import axios from "axios";

import { ADD_PRODUCTS, GET_RECIPES } from "./types";
import { returnErrors } from "./errorActions";

// ADD PRODUCTS
export const addProducts = products => {
  return {
    type: ADD_PRODUCTS,
    payload: { products }
  };
};

// GET RECIPES FROM API
export const getRecipes = (products, history) => async dispatch => {
  // dispatch(setProductsLoading());
  await axios
    .post("api/recipes/getbyingredients", { products })
    .then(res => {
      history.push("/searchresult");
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
