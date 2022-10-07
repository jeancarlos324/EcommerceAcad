import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cart.slice";
import isLoadingScreenSlice from "./slice/isLoadingScreen.slice";
import productsSlice from "./slice/product.slice";
import purchasesSlice from "./slice/purchases.slice";

export default configureStore({
  reducer: {
    setIsLoading: isLoadingScreenSlice,
    products: productsSlice,
    purchases: purchasesSlice,
    cart: cartSlice,
  },
});
