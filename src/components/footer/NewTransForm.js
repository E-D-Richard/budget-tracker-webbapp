import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenseTransaction
} from "../../features/transRecords/transRecordsSlice";
import { v4 as uuidv4 } from "uuid";
import {
  createPopUpOnZeroValueSubmit,
  handleInputChangeForCustomNumberInputField,
} from "../../utilities/helpers/helperFunctions/formHelpers";
import { developmentModeSettings } from "../../utilities/helpers/helperObjects";
import { selectBudgets, selectCurrentCategories } from "../../features/budgets/budgetsSlice";

const NewTransForm = ({ isExpanded }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCurrentCategories);
  const [category, setCategory] = useState(categories[0]);
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [preventSubmit, setPreventSubmit] = useState(true);
  const selectedBudgetCategoryState = useSelector(selectBudgets)[category];


  const resetForm = () => {
    setCategory(categories[0]);
    setNote("");
    setAmount("");
    setPreventSubmit(true);
  };

  /* clears old category values after deletion of a category 
  to avoid a scenario where old category value is still selected.*/
  useEffect(() => {
    setCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    //if was open, then reset form to default on close
    if (!isExpanded) {
      resetForm();
    }
  });

  const handleAmountValueChange = (e) => {
    const allowNegativeInputValues = false;
    handleInputChangeForCustomNumberInputField(e, setAmount, setPreventSubmit, allowNegativeInputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountDomInputElement = e.currentTarget.querySelector("input#amount");
    if (preventSubmit) {
      //prevent submission of zero/blank value
      createPopUpOnZeroValueSubmit(amountDomInputElement);
      return;
    }

    dispatch(
      addExpenseTransaction({
        type: "expense",
        category: category,
        note: note ? note : "",
        amount: Number(amount),
        prevBudgetTotal: selectedBudgetCategoryState.prevTotal,
        currentBudgetTotal: selectedBudgetCategoryState.currentTotal,
        id: uuidv4(),
      })
    );
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`new-trans-form ${isExpanded ? "open" : ""}`}
    >
      <div className="new-trans-select">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="new-trans-desc">
        <label htmlFor="note">Note</label>
        <input
          id="description"
          value={note}
          onChange={(e) => setNote(e.currentTarget.value)}
          type="text"
        />
      </div>

      <div className="new-trans-amount">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={amount}
          onChange={handleAmountValueChange}
          type="text"
          autoComplete={developmentModeSettings.autocomplete}
        />
      </div>
      <button className={`submit-btn ${preventSubmit ? "prevent" : "allow"}`}>
        Add Transaction
      </button>
    </form>
  );
};

export default NewTransForm;
