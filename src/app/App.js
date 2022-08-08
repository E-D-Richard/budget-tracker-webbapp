import React from "react";
import TransRecord from "../features/transRecord/TransRecord";
import Budgets from "../features/budgets/Budgets";
import NewTransaction from "../features/newTransaction/NewTransaction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Budget Tracker</h1>
      </header>
      <main>
        <Budgets />
        <TransRecord />
        <NewTransaction />
      </main>
    </div>
  );
}

export default App;
