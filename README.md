# Budget Tracker

[view live WebApp](https://main--kesef-budget-tracker.netlify.app/)

## Overview

A budgeting and expense tracking WebApp. The user is expected to record/input their transactions based on the categories set and customized by the user (such as food, transportation, etc.). The app then tracks the transactions and sums up the spending in each category to calculate the amount of money that remains to be spent.

### ToDo
 
- in settings menu, make menu auto collapse onClick outside menu
- in settings menu, make all custom options collapsed by default with capability to open on click
- test settings menu for mobile compatibility
- organize files to comply with feature vs component correct definitions
- get rid of unnesseray zero's once typing begins in all input forms
- beautify and stylize transactionList/records section
- Rename new transaction footer form to: New Expense

### features added

- update budgetSlice to also be an object key names for each category and arrays as the value. This should be more efficient for the increased amount of updates to TransList that budgetSlice now must make
- add a menu/settings option where the add or remove category features will live

### potential features to add

- add total remaining output data (of remaining total of all categories combined)
- avoid losing form data in collapsed state (include gif in documentation)
- auto generate pie charts based on js and the CSS "conic-gradient" property.
- hyperlink (byID) and auto scroll to individual budget (input-area) based on current category selected in New Transaction select element

## Details and Specs

### Concepts Applied

- Wireframing
- Function Components
- React Hooks
- Manage State with Redux-Toolkit and React-Redux
- Passing data between components using the redux store (via the useDispatch and useSelector hooks)
- Importing NPM packages and libraries
- Version control with git and GitHub
- Responsive Layouts (Users can use the application on both desktop/mobile)
- Using CSS Grid and Flexbox and media queries for layout, positioning, and responsiveness
- Deploying a website with netlify

### Languages, Frameworks, Tools and Libraries

- HTML
- CSS
- JavaScript
- React
- Redux & React-Redux
- Git and GitHub
- Command line and file navigation
- Chrome DevTools, React DevTools, Redux DevTools
- Netlify
- React-Icons library
