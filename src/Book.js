import React from 'react';
import BookShelfChanger from './BookShelfChanger';

/**
 * BooksGrid: -> A single Book
 */
function Book(props) {
	const { coverURL, title, authors, curShelf, shelfChanger, shelfList } = props;

	let book = (
		<li>
            <div className="book">
              <div className="book-top">
                <div
                	className="book-cover"
                	style={{ width: 128, height: 193,
                		backgroundImage: coverURL }}></div>
                	<BookShelfChanger
                		curShelf={curShelf}
                		bookId={title}
                		shelfChanger={shelfChanger}
                		shelfList={shelfList} />
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors}</div>
            </div>
         </li>
	);
	return book;
}

export default Book;