import { createSlice } from '@reduxjs/toolkit';


const initialState = { dropdownOffsetHeight: 0}
const newTransactionSlice = createSlice({
  name: 'newTransactions',
  initialState: initialState,
  reducers: {
    updateNewTransactionOffsetHeight: (state, action) => {
      state.dropdownOffsetHeight = action.payload;
    }
  }
});



export const selectNewTransactionOffsetHeight = (state) => state.newTransaction.dropdownOffsetHeight;

export const { updateNewTransactionOffsetHeight } = newTransactionSlice.actions;
export default newTransactionSlice.reducer;