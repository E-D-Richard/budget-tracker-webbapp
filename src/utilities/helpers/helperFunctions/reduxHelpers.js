//------------------------------------------------------- Redux Helpers -----------

export const combineAllExpenseTransactionsIntoOneArray = (expenseTransactionsArray) => {
    return expenseTransactionsArray.reduce((accArr, trans) => [...accArr, ...trans.transactionList], []);
}

export const combineAllBudgetTransactionsIntoOneArray = (budgetTransactionsArray) => {
    return budgetTransactionsArray.reduce((accArr, budget) => [...accArr, ...budget.history], []);
}
