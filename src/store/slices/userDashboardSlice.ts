import { createSlice } from "@reduxjs/toolkit";
import { UserDashboardState } from "./types";

const userDashboardSlice = createSlice({
  name: "user_dashboard",
  initialState: {
    user: "Peter",
    currentLevel: 4,
    totalCompleted: 0,
    additions: [],
    categories: [],
    loading: "idle",
  } as UserDashboardState,
  reducers: {
    dataLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    setAdditions(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.additions = action.payload;
      }
    },
    setCategories(state, action) {
      state.loading = "idle";
      state.categories = action.payload;
    },
    setTotalCompleted(state, action) {
      state.totalCompleted = action.payload;
    },
  },
});

export const { dataLoading, setAdditions, setCategories, setTotalCompleted } =
  userDashboardSlice.actions;

export default userDashboardSlice.reducer;
