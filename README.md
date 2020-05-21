# MyReads Project

This is the completed version of the MyReads App, built from the reactnd-project-myreads-starter repo.

## Instructions

To start the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Additional Packages

The following packages have added to package.json:

* `"lodash.debounce": "4.0.8"`
* `"react-router-dom": "^5.2.0"`

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
    ├── Book.js # Book component (single book)
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksGrid.js # Component for the grid of books displayed in a shelf or on search page
    ├── BookShelfChanger.js # Component for the dropdown used to change a Book's shelf or add a Book from the search page
    ├── Main.js # Component for the Main view with default shelves, at app open
    ├── MainHeader.js: # Component for the header on Main
    ├── MainSearchButton.js: # Component for the search button on the Main view
    ├── MainShelves.js: # Component to wrap the three main shelves on the Main view
    ├── parsebook.js: # Contains two helper functions to parse results from BooksAPI.getAll() and BooksAPI.search()
    ├── Search.js: # Component for the Search view
    ├── SearchBar.js: # Component for the Search bar
    ├── Shelf.js: # Component for a Shelf
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # This has been modified to use <BrowserRouter> from react-router-dom
```
