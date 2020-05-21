# MyReads Project

This is the completed version of the MyReads App, built from the reactnd-project-myreads-starter repo.

## Instructions

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Additional Packages

The following package has been added to package.json to enable debouncing of search results:

* `"lodash.debounce": "4.0.8"`

## Contents
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # This has been modified to use <BrowserRouter> from react-router-dom
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.