import { createSlice } from "@reduxjs/toolkit";

export const isLoadingScreen = createSlice({
  name: "loadingScreen",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      const isLoading = action.payload;
      return isLoading;
    },
  },
});

export const {setIsLoading} = isLoadingScreen.actions;
export default isLoadingScreen.reducer;
