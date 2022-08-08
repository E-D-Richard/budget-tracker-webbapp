import {createSlice} from '@reduxjs/toolkit';


const initialState = {deviceType: 'unknown', dropdownStatus: 'unknown',}
const newTransactionSlice = createSlice({
  name: 'newTransactions',
  initialState: initialState,
  reducers: {
    updateDevice: (state, action) => {
      state.deviceType = action.payload;
    },
    updateDropdownStatus: (state, action) => {
      state.dropdownStatus = action.payload;
    },

  }
});


export const selectDeviceType = (state) => state.newTransaction.deviceType;
export const selectDropdownStatus = (state) => state.newTransaction.dropdownStatus;

export const {updateDevice, updateDropdownStatus} = newTransactionSlice.actions; 
export default newTransactionSlice.reducer;