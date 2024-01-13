import { configureStore } from '@reduxjs/toolkit';
import transRecordReducer from '../features/transRecord/transRecordSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';
import newTransactionReducer from '../features/newTransaction/newTransactionSlice'
import settingsReducer from '../features/settings/settingsSlice';

const store = configureStore({
  reducer: {
    transactions: transRecordReducer,
    budgets: budgetsReducer,
    newTransaction: newTransactionReducer,
    settings: settingsReducer,
  }
});

export default store;




