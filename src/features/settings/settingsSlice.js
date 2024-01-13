import { createSlice } from "@reduxjs/toolkit";
import { currencies } from "../../utilities/helpers/helperArrays/currenciesArray";

const initialState = {
    selectedCurrency: {
        currencyIndex: 0,
        currencyData: currencies[0]
    }
};



const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    updateSelectedCurrency: (state, action) => {
      const currencyIndex = action.payload.index;
      state.selectedCurrency.currencyIndex = currencyIndex;
      state.selectedCurrency.currencyData = currencies[currencyIndex];
    },
  },
});




export const selectSelectedCurrencyIndex = (state) => state.settings.selectedCurrency.currencyIndex;
export const selectSelectedCurrencySymbol = (state) => state.settings.selectedCurrency.currencyData.symbol;
export const {updateSelectedCurrency} = settingsSlice.actions;
export default settingsSlice.reducer;