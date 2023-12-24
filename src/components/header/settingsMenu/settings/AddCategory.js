import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetCategory } from "../../../../features/budgets/budgetsSlice";
import { addTransactionCategory, selectCategories } from "../../../../features/transRecord/transRecordSlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const categories = useSelector(selectCategories);

  const handleInputPopUpMessage = (domInputElement, newValue) => {
    const duplicateFound = categories.includes(newValue);
    const trimmedDuplicateFound = categories.includes(newValue.trim())
    if (duplicateFound) {
      setIsDuplicate(true);
      domInputElement.setCustomValidity("duplicate");
    } else if(trimmedDuplicateFound){
      setIsDuplicate(true);
      domInputElement.setCustomValidity("");
    } else {
      setIsDuplicate(false);
      domInputElement.setCustomValidity("");
    }
    domInputElement.reportValidity();
  }

  const handleValueChange = (e) => {
    const newValue = e.currentTarget.value;
    handleInputPopUpMessage(e.currentTarget, newValue.toLowerCase());
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
        history: []
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
    <form onSubmit={handleSubmit} id="add-category" className="setting">
      <h3>Add Category</h3>
      {/* <label htmlFor="new-cat">name</label> */}
      <input
        id="new-cat"
        required
        type="text"
        value={newCategory}
        placeholder="category name"
        onChange={(e) => handleValueChange(e)}
      />
      <button className={isDuplicate ? "prevent" : ""}>Add</button>
    </form>
  );
};

export default AddCategory;
