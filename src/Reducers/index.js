import { combineReducers } from "@reduxjs/toolkit";
import  counterSlice  from "./counterReducer";
import  cartSlice  from "./cartReducer";
import favSlice from "./favouriteReducer";
export default combineReducers({
  counterSlice,
  cartSlice,
  favSlice
});
