import {createSlice} from '@reduxjs/toolkit';
import { combineAllExpenseTransactionsIntoOneArray } from '../../utilities/helpers/helperFunctions/reduxHelpers';
import { defaultCategories } from '../../utilities/helpers/helperArrays';
// import { act } from 'react-dom/test-utils';


// const initialState = Object.fromEntries(initialCategories.map(category => [category, []]))
const initialState = Object.fromEntries(defaultCategories.map(category => [category, {total: 0, transactionList: []}]))
const transRecordSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].transactionList.push(action.payload);
      state[categoryName].total += action.payload.amount;
    },
    deleteTransaction: (state, action) => {
      const categoryName = action.payload.category
      const transactionIndex = state[categoryName].transactionList.findIndex(trans => trans.id === action.payload.id);
      state[categoryName].total -= state[categoryName].transactionList[transactionIndex].amount;
      state[categoryName].transactionList.splice(transactionIndex, 1);
    },
    addTransactionCategory: (state, action) => {
      const {category, transactionObject} = action.payload;
      state[category] = transactionObject;
    },
    deleteTransactionCategory: (state, action) => {
      delete state[action.payload.category];
    }
  }
});


// export const selectCategories = (state) => Object.keys(state.transactions).sort();
export const selectTransactions = (state) => state.transactions;
export const selectAllExpenseTransactions = (state) => combineAllExpenseTransactionsIntoOneArray(Object.values(state.transactions));

export const {addTransaction, deleteTransaction, addTransactionCategory, deleteTransactionCategory} = transRecordSlice.actions; 
export default transRecordSlice.reducer;
