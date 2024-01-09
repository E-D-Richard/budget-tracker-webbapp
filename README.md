# Budget Tracker

[view live WebApp](https://main--kesef-budget-tracker.netlify.app/)

## Overview

A budgeting and expense tracking WebApp where a user can set/allocate funds to a given budget category. Default budget categories are provided by the app and the user can customize these categories by adding or removing a category using the settings menu (accessed by clicking on the setting/gear icon). Every time the user has a new expense transaction to record, they can submit that expense transaction to the correct category and the app will update the remaining budget balance for that category accordingly.

### ToDo

- create replit with a custom number input field which removes zero's on number entry
- to ease usability, remove zero's on value entry in NewTransForm input fields
- fix settingsMenu button overlay-appearance issue
- refresh memory on redux code (explore thunks in reddit project)
- update NewTrans to be hidden by default (similar to settingsMenu). Then, build a new sidebar component and add settingsMenu and NewTrans
- test settings menu and newTransForm for mobile compatibility
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
