import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../features/transactions/transactionsSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
});

export default store;




