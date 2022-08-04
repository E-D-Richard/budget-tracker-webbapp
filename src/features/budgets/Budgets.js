import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBudgets, addCategory } from "./budgetsSlice";
import Budget from "../../components/Budget";

const Budgets = () => {
  const dispatch = useDispatch();
  const budgets = useSelector(selectBudgets);
  const [newCategory, setNewCategory] = useState(null);

  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(
      addCategory({
        category: newCategory,
        amount: 0
    }))
    setNewCategory(null);
  }
  return (
    <section className="all-budgets-container">
      <ul>
        {budgets.map((budget) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <h3>Add Category</h3>
        <label htmlFor="new-name">name</label>
        <input id="new-name" type="text" onChange={(e)=>setNewCategory(e.currentTarget.value)} />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Budgets;
