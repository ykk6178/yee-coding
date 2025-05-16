import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  reduxState?: number; //  新增屬性
}

const initialState: CounterState = {
    reduxState: undefined, // 初始值

};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setReduxState: (state, action: PayloadAction<number>) => {
      state.reduxState = action.payload;
    },
  },
});

export const { setReduxState } = counterSlice.actions;

export default counterSlice.reducer;
