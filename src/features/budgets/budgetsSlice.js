import { createSlice } from "@reduxjs/toolkit";
import { defaultCategories } from "../../utilities/helpers/helperArrays/helperArrays";
import { sortArrayOfObjectsInAlphabeticalOrderOfKeys } from "../../utilities/helpers/helperFunctions/otherHelpers";
import Big from "big.js";
import { combineAllBudgetTransactionsIntoOneArray } from "../../utilities/helpers/helperFunctions/reduxHelpers";

const initialState = {};
defaultCategories.forEach((category) => {
  initialState[category] = {
    category: category,
    currentTotal: 0,
    budgetHistoryTotal: 0,
    history: [],
    isDefaultCategory: true,
  };
});

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    addBudgetBalanceEntry: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].currentTotal = Number(
        Big(state[categoryName].currentTotal).plus(action.payload.amount)
      );
      state[categoryName].budgetHistoryTotal = Number(
        Big(state[categoryName].budgetHistoryTotal).plus(action.payload.amount)
      );

     
      state[categoryName].history.push(action.payload);
    },

    deleteBudgetTransaction: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].currentTotal = Number(
        Big(state[categoryName].currentTotal).minus(action.payload.amount)
      );
      state[categoryName].budgetHistoryTotal = Number(
        Big(state[categoryName].budgetHistoryTotal).minus(action.payload.amount)
      );

      state[categoryName].history = state[categoryName].history.filter(
        (entry) => entry.id !== action.payload.id
      );
    },
    updateBudgetTotalsBasedOnNewExpense: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].currentTotal = Number(
        Big(state[categoryName].currentTotal).minus(action.payload.amount)
      );
    },
    updateBudgetTotalsBasedOnNewlyDeletedExpense: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].currentTotal = Number(
        Big(state[categoryName].currentTotal).plus(action.payload.amount)
      );
    },
    addBudgetCategory: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName] = action.payload;
    },
    deleteBudgetCategory: (state, action) => {
      const categoryName = action.payload.category;
      delete state[categoryName];
    },
  },
});

export const selectBudgetsInArrayFormat = (state) =>
  sortArrayOfObjectsInAlphabeticalOrderOfKeys(Object.values(state.budgets));
export const selectAllBudgetTransactions = (state) =>
  combineAllBudgetTransactionsIntoOneArray(Object.values(state.budgets));
export const selectBudgets = (state) => state.budgets;
export const selectCurrentCategories = (state) =>
  Object.keys(state.budgets).sort();

export const {
  addBudgetBalanceEntry,
  deleteBudgetTransaction,
  updateBudgetTotalsBasedOnNewExpense,
  updateBudgetTotalsBasedOnNewlyDeletedExpense,
  addBudgetCategory,
  deleteBudgetCategory,
} = budgetsSlice.actions;
export default budgetsSlice.reducer;
