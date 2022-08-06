import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/transactions/transactionsSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectTransactions } from "../features/transactions/transactionsSlice";

export default function InnerTransactionForm() {
  const dispatch = useDispatch();
  const categories = Object.keys(useSelector(selectTransactions));
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountInputAlert, setAmountInputAlert] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    //prevent 0 value transaction
    if (parseFloat(amount) === 0 || !amount) {
      setAmountInputAlert(true);
      return;
    }
    dispatch(
      addTransaction({
        category: category,
        description: description,
        amount: parseFloat(amount),
        id: uuidv4(),
      })
    );
    setCategory(categories[0]);
    setDescription("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="new-trans-form">
      <div id="new-transaction-select">
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

      <div id="new-transaction-desc">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          type="text"
        />
      </div>

      <div id="new-transaction-amount">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.currentTarget.value);
            setAmountInputAlert(false);
          }}
          type="number"
          step="0.01"
          className={amountInputAlert ? "amount-alert" : ""}
        />
      </div>
      <button id="submit-btn">Add Transaction</button>
    </form>
  );
}
