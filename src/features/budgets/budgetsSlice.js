import { createSlice } from "@reduxjs/toolkit";

const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
].sort();

const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
  history: [],
  isDefaultCategory: true,
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    addBudgetBalanceEntry: (state, action) => {
      state.forEach((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount += Number(action.payload.amount);
          //update transList
          budget.history.push(action.payload);
          
        }
      });
    },

    deleteBudgetBalanceEntry: (state, action) => {
      state.forEach((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount -= Number(action.payload.amount);
          //remove entry from transList
          budget.history = budget.history.filter(
            (entry) => entry.id !== action.payload.id
          );
        }
      });
    },
    addBudgetCategory: (state, action) => {
      state.push(action.payload);
      return state.sort((a, b) => a.category.localeCompare(b.category));
    },
    deleteBudgetCategory: (state, action) => {
      return state.filter((b) => b.category !== action.payload.category);
    },
  },
});

export const selectBudgets = (state) => state.budgets;
// export const selectBudgetBalance = (state) => state.budgets.;
export const {
  addBudgetBalanceEntry,
  deleteBudgetBalanceEntry,
  addBudgetCategory,
  deleteBudgetCategory,
} = budgetsSlice.actions;
export default budgetsSlice.reducer;
