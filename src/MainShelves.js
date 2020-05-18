import React from 'react';
import Shelf from './Shelf';

/**
 * Main: -> show Shelf(s)
 */
function MainShelves(props) {
	const { shelvedBooks, shelfChanger, shelfList } = props;

	return (
		<div className="list-books-content">
              {shelfList.map((s) => (
              	<Shelf
              		key={s.shelfId}
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