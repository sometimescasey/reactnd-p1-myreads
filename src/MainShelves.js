import React from 'react';
import Shelf from './Shelf';
import BookShelfChanger from './BookShelfChanger';

/**
 * Main: -> show Shelf(s)
 */
function MainShelves(props) {
	const { shelvedBooks, shelfChanger, shelfList } = props;

	return (
		<div className="list-books-content">
              <div>
                <Shelf
	                shelfId="currentlyReading"
	                shelfDisplayName="Currently Reading"
	                shelvedBooks={shelvedBooks}
	                shelfChanger={shelfChanger}
	                shelfList={shelfList} />
                <Shelf
	                shelfId="wantToRead"
	                shelfDisplayName="Want to Read"
	                shelvedBooks={shelvedBooks}
	                shelfChanger={shelfChanger}
	                shelfList={shelfList} />
                <Shelf
	                shelfId="read"
	                shelfDisplayName="Read"
	                shelvedBooks={shelvedBooks}
	                shelfChanger={shelfChanger}
	                shelfList={shelfList} />
              </div>
            </div>
	);
}

export default MainShelves;