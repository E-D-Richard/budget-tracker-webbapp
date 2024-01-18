import { configureStore } from '@reduxjs/toolkit';
import transRecordsReducer from '../features/transRecords/transRecordsSlice';
import budgetsReducer from '../features/budgets/budgetsSlice';
import settingsReducer from '../features/settings/settingsSlice';
import stylesReducer from '../assets/stylesSlice';

const store = configureStore({
  reducer: {
    transactions: transRecordsReducer,
    budgets: budgetsReducer,
    styles: stylesReducer,
    settings: settingsReducer,
  }
});

export default store;




