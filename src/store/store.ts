import { configureStore } from "@reduxjs/toolkit";
import additionsSlice from "./slices/additionsSlice";

export const store = configureStore({
  reducer: {
    additions: additionsSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
