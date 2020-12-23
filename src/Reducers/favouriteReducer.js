import { createSlice, current } from "@reduxjs/toolkit";
export const favSlice = createSlice({
  name: "favSlice",
  initialState: {
    favArray: [],
  },
  reducers: {
    addToFav: (state, action) => {
      state.favArray.push(action.payload);
    },
    removeFromFav: (state, action) => {
      let data = current(state.favArray).filter((x) => x.id != action.payload);
      state.favArray = data;
    },
  },
});
export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;
  