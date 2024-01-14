import { configureStore } from '@reduxjs/toolkit';
import transRecordsReducer from '../features/transRecords/transRecordsSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';
import newTransactionReducer from '../features/newTransaction/newTransactionSlice'
import settingsReducer from '../features/settings/settingsSlice';

const store = configureStore({
  reducer: {
    transactions: transRecordsReducer,
    budgets: budgetsReducer,
    newTransaction: newTransactionReducer,
    settings: settingsReducer,
  }
});

export default store;




