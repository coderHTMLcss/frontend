import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteAssets } from "../../thunks/assets";

const initialState: any = {
  assets: [],
  favoriteAssets: [],
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
      state.favoriteAssets.push(action.payload);
      //   state.isLoading = true;
    });
  },
});

export default assetsSlice.reducer;
