import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../features/budgets/budgetsSlice";
import { addTransactionCategory } from "../../features/transRecord/transRecordSlice";

export const AddCategory = () => {
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
      <form onSubmit={handleSubmit}>
      <h3>Add Category</h3>
      <label htmlFor="new-cat">name</label>
      <input
        id="new-cat"
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.currentTarget.value)}
        
      />
      <button>Add</button>
    </form>
  );
};
