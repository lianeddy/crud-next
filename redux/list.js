import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ["lian", "bambang", "joko"],
};

const { actions, reducer } = createSlice({
  name: "List",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { setList } = actions;
export default reducer;
