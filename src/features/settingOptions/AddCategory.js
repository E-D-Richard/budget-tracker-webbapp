import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetCategory } from "../budgets/budgetsSlice";
import { addTransactionCategory, selectCategories } from "../transRecord/transRecordSlice";
import { handleInputPopUpMessage } from "../../utilities/helperFunctions";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const categories = useSelector(selectCategories);

  const handleValueChange = (e) => {
    const newValue = e.currentTarget.value;
    setIsDuplicate(handleInputPopUpMessage(categories, e.currentTarget, newValue.toLowerCase()))
    setNewCategory(newValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //this conditional prevents adding a duplicate cateogry to categories
    if (categories.includes(newCategory.trim().toLowerCase())) {
      return;
    };

    dispatch(
      addBudgetCategory({
        category: newCategory.toLowerCase(),
        amount: 0,
        history: [],
        isDefaultCategory: false,
      })
    );
    dispatch(
      addTransactionCategory({
        category: newCategory.toLowerCase(),
        transactionArr: [],
      })
    );
    setNewCategory("");
  };

  return (
   
      <form 
        onSubmit={handleSubmit} 
        id="add-category" 
        className={`setting`} 
      >
        {/* <label htmlFor="new-cat">name</label> */}
        <input
          id="new-cat"
          required
          type="text"
          value={newCategory}
          placeholder="category name"
          onChange={(e) => handleValueChange(e)}
        />
        <button className={`submit ${isDuplicate ? "prevent" : ""}`}>Add</button>
      </form>
  );
};

//notes:
// 1. Auto-scroll behaviour to a newly created budget category is set inside the useEffect hook in Budget.js

export default AddCategory;
