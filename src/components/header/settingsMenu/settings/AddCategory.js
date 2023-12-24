import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBudgetCategory } from "../../../../features/budgets/budgetsSlice";
import { addTransactionCategory } from "../../../../features/transRecord/transRecordSlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newCategory)
    dispatch(
      addBudgetCategory({
        category: newCategory,
        amount: 0,
        history: []
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
    <form onSubmit={handleSubmit} id="add-category" className="setting">
      <h3>Add Category</h3>
      {/* <label htmlFor="new-cat">name</label> */}
      <input
        id="new-cat"
        type="text"
        value={newCategory}
        placeholder="category name"
        onChange={(e) => setNewCategory(e.currentTarget.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddCategory;
