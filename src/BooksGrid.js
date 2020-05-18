import React, { Component } from 'react';
import Book from './Book';
import BookShelfChanger from './BookShelfChanger';


/**
 * Shelf: -> Show grid of Books
 */
function BooksGrid(props) {
	const { filteredBooks, shelfChanger, shelfList } = props;
	/* TODO:  to props
	* props: add filtered book list
	*/
	let booksGrid = (
      <div className="bookshelf-books">
        <ol className="books-grid">
        	{ filteredBooks.map((b) => (
        		<Book
        			key={b.title}
        			title={b.title}
        			authors={b.authors}
        			coverURL={b.coverURL}
        			curShelf={b.shelf}
        			shelfChanger={shelfChanger}
        			shelfList={shelfList}
        			/>
        		)) }
        </ol>
      </div>
	);

	return booksGrid;
}

export default BooksGrid;