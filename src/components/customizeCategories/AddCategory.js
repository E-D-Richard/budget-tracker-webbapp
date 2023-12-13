import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../features/budgets/budgetsSlice";
import { addTransactionCategory } from "../../features/transRecord/transRecordSlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");

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
        category: newCategory,
        transactionArr: [],
      })
    );
    setNewCategory("");
  };

  return (
    <div id="add-category">
      <h3>Add Category</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-cat">name</label>
        <input
          id="new-cat"
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.currentTarget.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddCategory;
