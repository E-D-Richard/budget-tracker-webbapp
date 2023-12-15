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
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
  history: [],
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      // state.forEach((budget) => {
      //   if (budget.category === action.payload.category) {
      //     budget.amount += Number(action.payload.amount);
      //   }
      // });
    },
    addBudgetBalanceEntry: (state, action) => {
      state.forEach((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount += Number(action.payload.amount);
          budget.history.push(action.payload);
        }
      });
    },

    deleteBudgetBalanceEntry: (state, action) => {
      state.forEach((budget) => {
        if(budget.category === action.payload.category){
          budget.amount -= Number(action.payload.amount);
          budget.history = budget.history.filter(entry => entry.id !== action.payload.id);
        }
        console.log(budget.category, budget.amount, ...budget.history);
      });
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      const index = state.findIndex(
        (b) => b.category === action.payload.category
      );
      state.splice(index, 1);
    },
  },
});

export const selectBudgets = (state) => state.budgets;
export const {
  editBudget,
  addBudgetBalanceEntry,
  deleteBudgetBalanceEntry,
  addCategory,
  deleteCategory,
} = budgetsSlice.actions;
export default budgetsSlice.reducer;
