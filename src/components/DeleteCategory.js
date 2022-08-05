import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const DeleteCategory = ({ categories }) => {
  //const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    // dispatch(deleteCategory({}));
    // dispatch(deleteBudget({})); 
  };

  return (
    <form onSubmit={handleDelete}>
      <h3>Delete Category</h3>
      <label htmlFor="delete-cat">Category</label>
      <select
        name=""
        id="delete-cat"
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
      <button>Delete</button>
    </form>
  );
};
