import { configureStore } from '@reduxjs/toolkit';
import transRecordReducer from '../features/transRecord/transRecordSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';
import newTransactionReducer from '../features/newTransaction/newTransactionSlice'

const store = configureStore({
  reducer: {
    transactions: transRecordReducer,
    budgets: budgetsReducer,
    newTransaction: newTransactionReducer,
  }
});

export default store;




