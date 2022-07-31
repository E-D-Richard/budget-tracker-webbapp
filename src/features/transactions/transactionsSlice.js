import {createSlice} from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];

const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      console.log("delete")
      const getIndex = state[action.payload.category].findIndex(trans => trans.id === action.payload.id);
      console.log(getIndex)
      state[action.payload.category].splice(getIndex, 1);
    }
  }
});



export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((accArr, b) => [...accArr, ...b], []);

export const {addTransaction, deleteTransaction} = transactionsSlice.actions; 
export default transactionsSlice.reducer;
