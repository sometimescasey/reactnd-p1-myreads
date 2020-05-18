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
              {shelfList.map((s) => (
              	<Shelf
	                shelfId={s.shelfId}
	                shelfDisplayName={s.shelfDisplayName}
	                shelvedBooks={shelvedBooks}
	                shelfChanger={shelfChanger}
	                shelfList={shelfList} />
              	))}
            </div>
	);
}

export default MainShelves;