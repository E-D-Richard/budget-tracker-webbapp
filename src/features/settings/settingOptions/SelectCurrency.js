import { useDispatch, useSelector } from "react-redux";
import { currencies } from "../../../utilities/helpers/helperArrays/currenciesArray";
import {
  selectSelectedCurrencyIndex,
  updateSelectedCurrency,
} from "../settingsSlice";
import { useState } from "react";

const SelectCurrency = () => {
  const dispatch = useDispatch();
  const selectedCurrencyCode = useSelector(selectSelectedCurrencyIndex);
  //const selectedCurrencyObject = useSelector(selectSelectedCurrencyObject)
  const [currencyIndex, setCurrencyIndex] = useState(selectedCurrencyCode);
  const handleChange = (e) => {
    const newCurrencyIndex = e.currentTarget.value;
    setCurrencyIndex(newCurrencyIndex);
    dispatch(updateSelectedCurrency({ index: newCurrencyIndex }));
  };
  return (
    <form className="setting">
      <select
        name="select-currency"
        id="select-currency"
        value={currencyIndex}
        onChange={handleChange}
      >
        {currencies.map((currency, index) => (
          <option
            value={index}
            key={currency.code}
            id={`currency-option-${index}`}
          >
            {currency.code}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectCurrency;
