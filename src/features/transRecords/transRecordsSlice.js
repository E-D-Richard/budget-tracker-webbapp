import { createSlice } from "@reduxjs/toolkit";
import { combineAllExpenseTransactionsIntoOneArray } from "../../utilities/helpers/helperFunctions/reduxHelpers";
import { defaultCategories } from "../../utilities/helpers/helperArrays/helperArrays";
import Big from "big.js";


const initialState = Object.fromEntries(
  defaultCategories.map((category) => [
    category,
    { total: 0, transactionList: [] },
  ])
);
const transRecordsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addExpenseTransaction: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].transactionList.push({
        ...action.payload,
        prevBudgetTotal: action.payload.currentBudgetTotal,
        currentBudgetTotal: Number(Big(action.payload.currentBudgetTotal).minus(action.payload.amount)),
      });
      state[categoryName].total = Number(
        Big(state[categoryName].total).plus(action.payload.amount)
      );
    },
    deleteExpenseTransaction: (state, action) => {
      const categoryName = action.payload.category;
      const transactionIndex = state[categoryName].transactionList.findIndex(
        (trans) => trans.id === action.payload.id
      );
      state[categoryName].total = Number(
        Big(state[categoryName].total).minus(
          state[categoryName].transactionList[transactionIndex].amount
        )
      );
      state[categoryName].transactionList.splice(transactionIndex, 1);
    },
    addTransactionCategory: (state, action) => {
      const { category, transactionObject } = action.payload;
      state[category] = transactionObject;
    },
    deleteTransactionCategory: (state, action) => {
      delete state[action.payload.category];
    },
  },
});

// export const selectCategories = (state) => Object.keys(state.transactions).sort();
export const selectTransactions = (state) => state.transactions;
export const selectAllExpenseTransactions = (state) => 
  combineAllExpenseTransactionsIntoOneArray(Object.values(state.transactions));

export const {
  addExpenseTransaction,
  deleteExpenseTransaction,
  addTransactionCategory,
  deleteTransactionCategory,
} = transRecordsSlice.actions;
export default transRecordsSlice.reducer;
