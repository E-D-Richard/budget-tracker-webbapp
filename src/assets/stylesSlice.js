import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  body: {dropdownOffsetHeight: 0},
  transactionList: {hoveredRow: 1},
};
const newTransactionSlice = createSlice({
  name: "styles",
  initialState: initialState,
  reducers: {
    updateNewTransactionOffsetHeight: (state, action) => {
      state.body.dropdownOffsetHeight = action.payload;
    },
    setTransactionListHoveredRow: (state, action) => {
      state.transactionList.hoveredRow = action.payload.row;
    },
  },
});

export const selectNewTransactionOffsetHeight = (state) =>
  state.styles.body.dropdownOffsetHeight;
export const selectTransactionListHoveredRow = (state) => state.styles.transactionList.hoveredRow;

export const {
  updateNewTransactionOffsetHeight,
  setTransactionListHoveredRow,
} = newTransactionSlice.actions;
export default newTransactionSlice.reducer;
