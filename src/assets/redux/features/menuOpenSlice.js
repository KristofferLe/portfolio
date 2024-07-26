import { createSlice } from "@reduxjs/toolkit";

const menuOpenSlice = createSlice({
  name: "$menuOpen",
  initialState: false,
  reducers: {
    toggleMenu: (state) => !state,
    closeMenu: (state) => false,
  },
});

export const { toggleMenu, closeMenu } = menuOpenSlice.actions;
export default menuOpenSlice.reducer;
