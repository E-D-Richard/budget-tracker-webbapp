import React from "react";
import TransRecord from "../features/transRecord/TransRecord";
import Budgets from "../features/budgets/Budgets";
import NewTransaction from "../features/newTransaction/NewTransaction";
import { useSelector } from "react-redux";
import { selectTransactions } from "../features/transRecord/transRecordSlice";


function App() {
  const categories = Object.keys(useSelector(selectTransactions));
  return (
    <div className="App">
      <header className="App-header">
        <h1>Budget Tracker</h1>
          <Budgets categories={categories} />
          <TransRecord />
          <NewTransaction />
      </header>
    </div>
  );
}

export default App;
