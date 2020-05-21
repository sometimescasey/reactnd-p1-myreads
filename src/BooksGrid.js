import React from 'react';
import Book from './Book';


/**
 * Shelf: -> Show grid of Books
 * Search: -> Show grid of Books
 */
function BooksGrid(props) {
	const { filteredBookList, shelfChanger, bookAdder, shelfList, searchResultsCallBack } = props;

	let booksGrid = (
      <div className="bookshelf-books">
        <ol className="books-grid">
        	{ filteredBookList.map((b) => (
        		<Book
        			key={b.id}
        			title={b.title}
                    bookId={b.id}
        			authors={b.authors}
        			coverURL={b.coverURL}
        			curShelf={b.shelf}
        			shelfChanger={shelfChanger}
                    bookAdder={bookAdder}
        			shelfList={shelfList}
                    searchResultsCallBack={searchResultsCallBack}
        			/>
        		)
            ) }
        </ol>
      </div>
	);

	return booksGrid;
}

export default BooksGrid;