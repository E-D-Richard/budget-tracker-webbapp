import { createSlice } from "@reduxjs/toolkit";
import { defaultCategories } from "../../utilities/helpers/helperArrays";
import { sortArrayOfObjectsInAlphabeticalOrderOfKeys } from "../../utilities/helpers/helperFunctions/otherHelpers";
import Big from "big.js";


const initialState = {};
defaultCategories.forEach((category) => {
  initialState[category] = {
    category: category,
    amount: 0,
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
      state[categoryName].amount = Number(Big(state[categoryName].amount).plus(action.payload.amount));
      state[categoryName].history.push(action.payload);
    },

    deleteBudgetBalanceEntry: (state, action) => {
      const categoryName = action.payload.category;
      state[categoryName].amount = Number(Big(state[categoryName].amount).minus(action.payload.amount));
      state[categoryName].history = state[categoryName].history.filter(
        (entry) => entry.id !== action.payload.id
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



export const selectBudgets = (state) => sortArrayOfObjectsInAlphabeticalOrderOfKeys(Object.values(state.budgets));
export const selectCurrentCategories = (state) => Object.keys(state.budgets);
export const {
  addBudgetBalanceEntry,
  deleteBudgetBalanceEntry,
  addBudgetCategory,
  deleteBudgetCategory,
} = budgetsSlice.actions;
export default budgetsSlice.reducer;