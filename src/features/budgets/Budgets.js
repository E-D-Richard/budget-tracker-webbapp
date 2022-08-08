import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetsSlice";
import { selectTransactions } from "../transRecord/transRecordSlice";
import Budget from "../../components/body/Budget";
import {AddCategory} from "../../components/menu/AddCategory";
import { DeleteCategory } from "../../components/menu/DeleteCategory";


const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  const categories = Object.keys(useSelector(selectTransactions));
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


