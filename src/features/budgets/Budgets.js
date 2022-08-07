import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetsSlice";
import Budget from "../../components/body/Budget";
import {AddCategory} from "../../components/menu/AddCategory";
import { DeleteCategory } from "../../components/menu/DeleteCategory";


const Budgets = ({categories}) => {
  const budgets = useSelector(selectBudgets);
  return (
    <section className="all-budgets-container">
      <ul>
        {budgets.map((budget) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </ul>
      <AddCategory categories={categories} />
      <DeleteCategory categories={categories} />
    </section>
  );
};

export default Budgets;


