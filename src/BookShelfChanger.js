import React from 'react';

/**
 * Book: -> Dropdown for changing the Shelf that a Book belongs to.
 TODO: needs to take a callback that alters state all the way up at App level
 */
function BookShelfChanger(props) {
	const { curShelf, bookId, shelfChanger, shelfList } = props;
	console.log(bookId, curShelf);

	const handleChange = (e) => {
		const newShelf = e.target.value;
		shelfChanger(bookId, newShelf);
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