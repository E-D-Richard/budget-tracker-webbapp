import {createSlice} from '@reduxjs/toolkit';


const initialState = {deviceType: '', isExpanded: 'false',}
const newTransactionSlice = createSlice({
  name: 'newTransactions',
  initialState: initialState,
  reducers: {
    updateDevice: (state, action) => {
      state.deviceType = action.payload;
    },
    updateExpanded: (state, action) => {
      state.isExpanded = action.payload;
    },

  }
});



export const selectDeviceType = (state) => state.newTransactions.deviceType;
export const selectExpandedState = (state) => state.newTransactionSlice.isExpanded;

export const {addTransaction, deleteTransaction, addTransactionCategory} = newTransactionSlice.actions; 
export default newTransactionSlice.reducer;