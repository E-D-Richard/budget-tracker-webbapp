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
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      state.forEach((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount
        }
      })
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      const index = state.findIndex(b => b.category === action.payload.category);
      state.splice(index, 1)

    }

  }
});


export const selectBudgets = (state) => state.budgets;
export const { editBudget, addCategory, deleteCategory } = budgetsSlice.actions;
export default budgetsSlice.reducer;
