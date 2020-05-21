import React from 'react';

/**
 * Book: -> Dropdown for changing the Shelf that a Book belongs to.
 */
function BookShelfChanger(props) {
	const { curShelf,
			bookObj,
			dropdownHandler,
			shelfList,
			searchResultsCallBack } = props;

	const handleChange = (e) => {
		const newShelf = e.target.value;
		dropdownHandler(bookObj, newShelf);
		if ( searchResultsCallBack ) {
			searchResultsCallBack();
		}
	};

	let changer = (
		<div className="book-shelf-changer">
			<select onChange={handleChange} value={curShelf}>
				<option key="move" value="move" disabled>Move to...</option>
				{shelfList.map((s) => (
					<option key={s.shelfId} value={s.shelfId}>
					{s.shelfDisplayName}
					</option>
					))}
				<option key="none" value="none">None</option>
			</select>
		</div>
		);
	return changer;
}

export default BookShelfChanger;