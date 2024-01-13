import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetBalanceEntry } from "../../features/budgets/budgetsSlice";
import { selectTransactions } from "../../features/transRecord/transRecordSlice";
import { v4 as uuidv4 } from "uuid";
import {
  createPopUpOnZeroValueSubmit,
  handleInputChangeForCustomNumberInputField,
} from "../../utilities/helpers/helperFunctions/formHelpers";
import { developmentModeSettings } from "../../utilities/helpers/helperObjects";

const Budget = ({ budget }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [preventSubmit, setPreventSubmit] = useState(true);
  const transactions = useSelector(selectTransactions);
  const budgetRef = useRef();
  const budgetCategoryCreatedByUser = !budget.isDefaultCategory;
  const remainingFunds = (budget.amount - transactions[budget.category].total).toFixed(2);
  const resetForm = () => {
    setAmount("");
    setPreventSubmit(true);
  };

  //when a user creates a new category, this effect auto scrolls to that new budget category
  useEffect(() => {
    if (budgetCategoryCreatedByUser && budgetRef.current) {
      budgetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [budgetCategoryCreatedByUser]);


  const handleChange = (e) => {
    handleInputChangeForCustomNumberInputField(e, setAmount, setPreventSubmit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetDomInputElement =
      budgetRef.current.querySelector("#amount-input");
    if (preventSubmit) {
      createPopUpOnZeroValueSubmit(budgetDomInputElement);
      return;
    }

    dispatch(
      addBudgetBalanceEntry({
        category: budget.category,
        type: "budget",
        description: `added balance to ${budget.category} budget`,
        amount: Number(amount),
        id: uuidv4(),
      })
    );
    resetForm();
  };


  return (
    <li className="budget-container" id={budget.category} ref={budgetRef}>
      <div className="data-wrapper">
        <div className="category-label">Category</div>
        <h3 className="category-value">{budget.category}</h3>
        <h4
          className={`remaining-funds ${(Number(amount) > 0) ? "positive" : (Number(amount) < 0) ? "negative" : "null"}`}
        >
          Funds Remaining: {remainingFunds}
        </h4>
      </div>

      <form onSubmit={handleSubmit} className="budget-form">
        <input
          className="amount-input"
          id="amount-input"
          name="amount-to-add"
          value={amount}
          onChange={handleChange}
          step="0.01"
          type="text"
          autoComplete={developmentModeSettings.autocomplete}
        />
        <button
          className={`submit-button ${preventSubmit ? "prevent" : "allow"}`}
        >
          Update
        </button>
      </form>
    </li>
  );
};

export default Budget;
