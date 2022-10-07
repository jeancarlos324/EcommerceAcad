import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import tokenConfig from "../../utils/tokenConfig";
import { setIsLoading } from "./isLoadingScreen.slice";

export const cartSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", tokenConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .catch((error) => console.log(error.response.data.message))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addToCart = (product) => async (dispatch) => {
  dispatch(setIsLoading(true));
  return await axios
    .post(
      "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
      product,
      tokenConfig()
    )
    .then(() => dispatch(getCartThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteToCart = (product) => async (dispatch) => {
  dispatch(setIsLoading(true));
  return await axios
    .delete(
      `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product}`,
      tokenConfig()
    )
    .then(() => dispatch(getCartThunk()))
    .catch((error) => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
};

export const purchaseCartThunk = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  return await axios
    .post(
      "https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
      {},
      tokenConfig()
    )
    .then(() => dispatch(setCart([])))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
