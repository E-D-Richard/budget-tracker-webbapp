import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetCategory } from "../../../../features/budgets/budgetsSlice";
import { addTransactionCategory, selectCategories } from "../../../../features/transRecord/transRecordSlice";
import { AiFillLeftSquare } from "react-icons/ai";
import { handleInputPopUpMessage } from "../../../../utilities/helperFunctions";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const categories = useSelector(selectCategories);
  const settingFormRef = useRef();
  const [settingFormHeight, setSettingFormHeight] = useState(false);

  useEffect(()=>{
    setSettingFormHeight(settingFormRef.current.offsetHeight);
    setIsOpen(false);
  },[])

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
    <div id="add-category-container" className={`setting-container`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="setting-button"
      >
        <AiFillLeftSquare className={`icon left ${!isOpen ? "left" : "down"}`} />
        <p className="button-text">Add Category</p>
      </button>

      <form 
        onSubmit={handleSubmit} 
        id="add-category" 
        className={`setting ${isOpen ? "open" : ""}`} 
        ref={settingFormRef}
        style={isOpen ? {height: `${settingFormHeight}px`} : {height: "0px"}}
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

    </div>

  );
};

export default AddCategory;
