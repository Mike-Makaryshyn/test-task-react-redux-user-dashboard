import { createSlice } from "@reduxjs/toolkit";

export interface AdditionInterface {
  profileViews: number;
  books: number;
  id: string;
}

export interface AdditionsState {
  loading: "idle" | "pending";
  additions: AdditionInterface[];
}

const additionsSlice = createSlice({
  name: "additions",
  initialState: {
    loading: "idle",
    additions: [],
  } as AdditionsState,
  reducers: {
    additionsLoading(state) {
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
  },
});

export const { additionsLoading, setAdditions } = additionsSlice.actions;

export default additionsSlice.reducer;
