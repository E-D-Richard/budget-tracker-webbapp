import {createSlice} from '@reduxjs/toolkit';
// import { act } from 'react-dom/test-utils';

const initialCategories = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];

const initialState = Object.fromEntries(initialCategories.map(category => [category, []]))
const transRecordSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      //console.log(action.payload)
      state[action.payload.category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      const getIndex = state[action.payload.category].findIndex(trans => trans.id === action.payload.id);
      state[action.payload.category].splice(getIndex, 1);
    },
    addTransactionCategory: (state, action) => {
      state[action.payload.category] = action.payload.transactionArr;
    },
    deleteTransactionCategory: (state, action) => {
      delete state[action.payload.category];
    }
  }
});


export const selectCategories = (state) => Object.keys(state.transactions);
export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((accArr, b) => [...accArr, ...b], []);

export const {addTransaction, deleteTransaction, addTransactionCategory, deleteTransactionCategory} = transRecordSlice.actions; 
export default transRecordSlice.reducer;
