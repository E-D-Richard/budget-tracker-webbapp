# Budget Tracker

[view live WebApp](https://main--kesef-budget-tracker.netlify.app/)

## Overview

A budgeting and expense tracking WebApp where a user can set/allocate funds to a given budget category. Default budget categories are provided by the app and the user can customize these categories by adding or removing a category using the settings menu (accessed by clicking on the setting/gear icon). Every time the user has a new expense transaction to record, they can submit that expense transaction to the correct category and the app will update the remaining budget balance for that category accordingly.

### ToDo

- create a new column in transactionLists called Category that lists category name in bold for each transaction
- add a second line to each transaction called detailedDesc this should use info that would appear in prevBudgetTotal, CurrentBudgetTotal and, ExpensesTotal. Once this is built, remove the above three columns, this will make layout very mobile friendly
- in transList button icon replace "X" with a trash can icon
- in transList create a filter by category option that allows user to only view the transactions from a preferred/chosen/selected category
- build navMenu functionComponent and reconfigure settings menu to living within it (currently settingMenu is absolutely positioned above it)
- change app color scheme to green palette
- make sure tab (via tab index values) works in all forms
- make replits to preserve all the form related helper functions that handles zero's in forms
- add a feature in settings where a user can change to what decimal point they want round off to in budget forms and in newTrans form
- hyperlink (byID) and auto scroll to individual budget (input-area) based on current category selected in New Transaction select element (ADD TO FEATURES LIST)
- Rename new transaction footer form to: NewExpense
- add a clearAll button to TransList
- Stylize transList and potentially add an additionalDataDropdown section for each transaction in transactionList that can contain these details: budgetTotalDuringTimeOfTransaction, "more ideas??..."
- fix settingsMenu button overlay-appearance issue
- test settings menu and newTransForm for mobile compatibility
- update NewTrans to be hidden by default (similar to settingsMenu). Then, build a new sidebar component and add settingsMenu and NewTrans
- organize files to comply with feature vs component correct official definitions
- refresh memory on redux code (explore thunks in reddit project)

### Features

- A Settings menu where all customization options live. Customization options currently are:
  - Select Currency
    - User Selects their preferred currency and the corresponding currency symbol is automatically displayed next to all numerical output
  - Add new categories
    - Auto scrolls to the newly created budget categories
    - Prevents the addition of duplicate categories
  - Delete existing categories

### Potential Features to Add

- add total remaining output data (of remaining total of all categories combined)
- avoid losing form data in collapsed state (include gif in documentation)
- auto generate pie charts based on js and the CSS "conic-gradient" property.

## Details and Specs

- This app uses the [Big.js library](https://www.npmjs.com/package/big.js?activeTab=readme) library to avoid JavaScript's math errors and bugs

### Concepts Applied

- Wireframing
- React Function Components
- React Hooks
- Manage State with Redux-Toolkit and React-Redux
- Importing NPM packages and libraries
- Version control with git and GitHub
- Responsive Layouts (Users can use the application on both desktop/mobile)
- Deploying a website with netlify

### Languages, Frameworks, Tools and Libraries

- HTML
- CSS
- JavaScript
- React
- Redux & React-Redux
- Big.js
- Git and GitHub
- Command line and file navigation
- Chrome DevTools, React DevTools, Redux DevTools
- Netlify
- React-Icons library
