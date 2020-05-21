import React from 'react';
import BookShelfChanger from './BookShelfChanger';

/**
 * BooksGrid: -> A single Book
 */
function Book(props) {
  const formatAuthors = (authors) => {
    if (!authors) {
      return "(Author Unknown)";
    }

    if (authors.length < 2) {
      return authors;
    } else {
      let authorString = authors[0];
      for (let i = 1; i < authors.length; i++) {
        authorString += `, ${authors[i]}`
      }
      return authorString;
    }

  };

  const mockThumbnail = (coverURL) => {
    if (!coverURL) { coverURL = "linear-gradient(#555, #eee)"; }

    return (
        <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: coverURL }}>
        </div>
        );
  };

	const {
    title,
    bookId,
    authors,
    coverURL,
    curShelf,
    shelfChanger,
    bookAdder,
    shelfList,
    searchResultsCallBack,
  } = props;

	let dropdownHandler = (curShelf === 'none') ? bookAdder : shelfChanger;

  let book = (
		<li>
            <div className="book">
              <div className="book-top">
                {mockThumbnail(coverURL)}
                	<BookShelfChanger
                		curShelf={curShelf}
                		bookObj={{
                      id: bookId,
                      title: title,
                      authors: authors,
                      coverURL: coverURL }}
                		dropdownHandler={dropdownHandler}
                		shelfList={shelfList}
                    searchResultsCallBack={searchResultsCallBack} />
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{formatAuthors(authors)}</div>
            </div>
         </li>
	);
	return book;
}

export default Book;