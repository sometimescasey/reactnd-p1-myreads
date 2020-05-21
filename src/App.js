import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Main from './Main';
import Search from './Search';
import { parseBook } from './parsebook';

const initialShelfList = [
  {
    shelfId: "currentlyReading",
    shelfDisplayName: "Currently Reading"
  },
  {
    shelfId: "wantToRead",
    shelfDisplayName: "Want to Read"
  },
  {
    shelfId: "read",
    shelfDisplayName: "Read"
  },
];

/* TODO bonus: be able to create a new shelf and persist to DB */
class BooksApp extends Component {
  state = {
    shelvedBooks: [],
    shelfList: initialShelfList,
  }

  componentDidMount() {
    // Udacity server will return 7 default books assigned to that user.
    const bookPromise = BooksAPI.getAll();
    bookPromise.then((r) => {
      const parsedBookList = r.map((b) => (parseBook(b)));
      let parsedBookObj = {};
      for (let i = 0; i < parsedBookList.length; i++) {
        parsedBookObj[parsedBookList[i].id] = parsedBookList[i];
      }
      this.setState((cs) => ({ shelvedBooks: parsedBookObj }) );
      });
  }

  /* if book not on shelf (i.e. new search result),
   * render its BookShelfChanger dropdownHandler with this */
  addToShelf = (bookObjToAdd, newShelf) => {
    const makeUpdatedState = (cs) => {
      let updatedShelvedBooks = this.state.shelvedBooks;
      updatedShelvedBooks[bookObjToAdd.id] =
        {
          id: bookObjToAdd.id,
          title: bookObjToAdd.title,
          authors: bookObjToAdd.authors,
          coverURL: bookObjToAdd.coverURL,
          shelf: newShelf};

      const newState = {shelvedBooks: updatedShelvedBooks};
      return newState;
    }

    this.setState((cs) => (makeUpdatedState(cs)));
    BooksAPI.update({id: bookObjToAdd.id}, newShelf);
  }

  /* if book on shelf,
   * render its BookShelfChanger dropdownHandler with this */
  changeBookShelf = (bookObjToAdd, newShelf) => {
    const bookIdToAlter = bookObjToAdd.id;

    const makeUpdatedState = (cs) => {
      let updatedShelvedBooks = this.state.shelvedBooks;

      if (newShelf !== 'none') {
        updatedShelvedBooks[bookIdToAlter].shelf = newShelf;
      } else {
        delete updatedShelvedBooks[bookIdToAlter];
      }
      return {shelvedBooks: updatedShelvedBooks};
    };

    this.setState((cs) => (makeUpdatedState(cs)));
    BooksAPI.update({id: bookIdToAlter}, newShelf); // pass 'none', not null
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Main
            shelvedBooks={this.state.shelvedBooks}
            shelfChanger={(b,s) => {this.changeBookShelf(b,s)}}
            bookAdder={(b,s) => {this.addToShelf(b,s)}}
            shelfList={this.state.shelfList} />
            )}/>
        <Route path="/search" render = {() => (
          <Search
            shelfChanger={(b,s) => {this.changeBookShelf(b,s)}}
            bookAdder={(b,s) => {this.addToShelf(b,s)}}
            shelfList={this.state.shelfList}
            shelvedBooks={this.state.shelvedBooks}
             />

          )}/>
      </div>
    )
  }
}

export default BooksApp
