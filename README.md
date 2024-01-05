# Budget Tracker

[view live WebApp](https://main--kesef-budget-tracker.netlify.app/)

## Overview

A budgeting and expense tracking WebApp. The user is expected to record/input their transactions based on the categories set and customized by the user (such as food, transportation, etc.). The app then tracks the transactions and sums up the spending in each category to calculate the amount of money that remains to be spent.

### ToDo
- fix google issue reporting: A form field element has neither an id nor a name attribute. This might prevent the browser from correctly autofilling the form.
- create a smooth a color effect for currently selected option setting (build out redux store to track state of current selection).
- in settings menu, stylize all setting option buttons and option forms (including transitions)
- style NewTransaction button to appear frozen on invalid form entries and add custom input form popUp messages (also create a hover and active state)
- refresh memory on redux code (explore thunks in reddit project)
- update NewTrans to be hidden by default (simmilar to settingsMenu). Then, build a new sidebar component and add setttingsMenu and NewTrans 
- test settings menu for mobile compatibility
- organize files to comply with feature vs component correct official definitions
- get rid of unnesseray zero's once typing begins in all input forms
- beautify and stylize transactionList/records section
- Rename new transaction footer form to: NewExpense

### Features

- A Settings menu where all customization options live. Customization options currently are:
    - Add new categories
        - Auto scrolls to the newly created budget categories
        - Prevents the addition of duplicate categories
    - Delete existing categories

### Potential Features to Add

- add total remaining output data (of remaining total of all categories combined)
- avoid losing form data in collapsed state (include gif in documentation)
- auto generate pie charts based on js and the CSS "conic-gradient" property.
- hyperlink (byID) and auto scroll to individual budget (input-area) based on current category selected in New Transaction select element

## Details and Specs

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
- Git and GitHub
- Command line and file navigation
- Chrome DevTools, React DevTools, Redux DevTools
- Netlify
- React-Icons library
