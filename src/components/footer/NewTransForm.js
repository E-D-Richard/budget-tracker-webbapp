import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, selectCategories } from "../../features/transRecord/transRecordSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { createPopUpOnZeroValueInput, valueIsZeroOrBlank } from "../../utilities/helperFunctions";

const NewTransForm = ({isExpanded}) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories)
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [preventSubmit, setPreventSubmit] = useState(true);
  
  const resetForm = () => {
    setCategory(categories[0]);
    setDescription("");
    setAmount(0);
    setPreventSubmit(true);
  }

  
  /* clears old category value after deletion of category 
  to avoid a scenario where old category value is still selected.*/
  useEffect(() => {
    setCategory(categories[0])
  }, [categories]);

  useEffect(()=>{
    //if was open, then reset form to default on close
    if(!isExpanded){
      resetForm();
    }
  });
  



  const handleAmountValueChange = (e) => {
    const newAmount = Number(e.currentTarget.value); 
    setAmount(newAmount);
    createPopUpOnZeroValueInput(e.currentTarget, newAmount);
    if(!valueIsZeroOrBlank(newAmount)){
      setPreventSubmit(false);
    } else {
      setPreventSubmit(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (valueIsZeroOrBlank(amount)) {
      //prevent submission of zero/blank value
      const amountDomInputElement = e.currentTarget.querySelector("input#amount");
      createPopUpOnZeroValueInput(amountDomInputElement, amount);
      return;
    }


    dispatch(
      addTransaction({
        type: "expense",
        category: category,
        description: description,
        amount: parseFloat(amount),
        id: uuidv4(),
      })
    );
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className={`new-trans-form ${isExpanded ? "open" : ""}`}>
      <div className="new-trans-select">
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

      <div className="new-trans-desc">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          type="text"
        />
      </div>

      <div className="new-trans-amount">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          value={amount}
          onChange={handleAmountValueChange}
          type="number"
          step="0.01"
        />
      </div>
      <button className={`submit-btn ${preventSubmit ? "prevent" : "allow"}`}>Add Transaction</button>
    </form>
  );
}

export default NewTransForm;