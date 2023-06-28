import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    setData(state, action) {
      state.push(action.payload);
      console.log(action);
    },
  },
});
console.log(dataSlice)
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
