import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/budgets/budgetsSlice";
import { addTransactionCategory } from "../features/transactions/transactionsSlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCategory({
        category: newCategory,
        amount: 0,
      })
    );
    dispatch(
      addTransactionCategory({
        name: newCategory,
        transactionArr: [],
      })
    );
    setNewCategory('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h3>Add Category</h3>
      <label htmlFor="new-name">name</label>
      <input
        id="new-name"
        type="text"
        onChange={(e) => setNewCategory(e.currentTarget.value)}
        value={newCategory}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddCategory;
