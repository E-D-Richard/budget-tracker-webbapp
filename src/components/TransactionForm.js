import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  CATEGORIES,
} from "../features/transactions/transactionsSlice";
import { v4 as uuidv4 } from "uuid";

export default function TransactionForm({ categories }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [amountAlert, setAmountAlert] = useState(false);
  const [hide, setHide] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    //prevent 0 value transaction
    if (parseFloat(amount) === 0 || !amount) {
      setAmountAlert(true);
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
    setCategory(CATEGORIES[0]);
    setDescription("");
    setAmount(0);
  };
  return (
    <section className="new-transaction-section">
      <h2>New Transaction</h2>
      <div id="hide-btn">
        <button
          onClick={() => {!hide ? setHide(true) : setHide(false);}}
          className={!hide ? "dropdown-btn" : "default-btn"}
        >
          {hide ? "New Transaction" : "v"}
        </button>
      </div>
      {!hide && (
        <form onSubmit={handleSubmit}>
          <div id="new-transaction-select">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            >
              {CATEGORIES.map((c) => (
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
                setAmountAlert(false);
              }}
              type="number"
              step="0.01"
              className={amountAlert && "amount-alert"}
            />
          </div>
          <button id="submit-btn">Add Transaction</button>
        </form>
      )}
    </section>
  );
}
