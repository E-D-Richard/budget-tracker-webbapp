//------------------------------------------------------- Redux Helpers -----------

export const combineAllExpenseTransactionsIntoOneArray = (expenseTransactionsArray) => {
    return expenseTransactionsArray.reduce((accArr, b) => [...accArr, ...b.transactionList], []);
  }