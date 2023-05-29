import { configureStore } from "@reduxjs/toolkit";

export const reducers = {};

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
