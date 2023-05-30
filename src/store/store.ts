import { configureStore } from "@reduxjs/toolkit";
import userDashboardSlice from "./slices/userDashboardSlice";

export const store = configureStore({
  reducer: {
   userDashboard: userDashboardSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
