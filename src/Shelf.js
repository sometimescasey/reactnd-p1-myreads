import React from 'react';
import BooksGrid from './BooksGrid';


/**
 * MainShelves: -> A single Shelf
 */
function Shelf(props) {
	/*
	* TODO: pass in list of all shelved books as props
	run filter function
	pass filtered books to BooksGrid
	*/
	const { shelfId, shelfDisplayName, shelvedBooks, shelfChanger, shelfList } = props;

	const filterForShelf = (shelvedBooks) => {
		const filtered = shelvedBooks.filter(
				(b) => b.shelf === shelfId
			);
		return filtered;
	};

	let shelf = (
		<div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfDisplayName}</h2>
                  <BooksGrid
                  	filteredBooks={filterForShelf(shelvedBooks)}
                  	shelfChanger={shelfChanger}
                  	shelfList={shelfList} />
        </div>
	);
	return shelf;
}

export default Shelf;