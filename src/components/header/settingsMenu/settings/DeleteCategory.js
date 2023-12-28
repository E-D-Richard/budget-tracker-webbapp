import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBudgetCategory } from "../../../../features/budgets/budgetsSlice";
import { deleteTransactionCategory, selectCategories } from "../../../../features/transRecord/transRecordSlice";
import { AiFillLeftSquare } from "react-icons/ai";
const DeleteCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBudgetCategory({ category: category }));
    dispatch(deleteTransactionCategory({ category: category }));
  };

  return (
    <div id="delete-category-container" >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="setting-button"
      >
        <AiFillLeftSquare className={`icon left ${!isOpen ? "left" : "down"}`} />
        Delete Category
      </button>
      {isOpen &&
        <form onSubmit={handleDelete} id="delete-category" className="setting">
          {/* <label htmlFor="delete-cat">Category</label> */}
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.currentTarget.value)}
            required
          >
            <option value="" key="default">
              select category
            </option>
            {categories.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button className="submit">Delete</button>
        </form>
      }
    </div>

  );
};

export default DeleteCategory;
