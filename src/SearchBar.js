import React from 'react';
import { Link } from 'react-router-dom';


/* Search: -> Top search bar */
function SearchBar(props) {
	const { onChangeHandler, value } = props;

	const searchBar = (
		<div className="search-books-bar">
			<Link to="/">
				<button className="close-search">Close</button>
			</Link>
			<div className="search-books-input-wrapper">
				<input type="text"
				placeholder="Search by title or author"
				value={value}
				onChange={onChangeHandler}/>
			</div>
		</div>
	);

	return searchBar;
}

export default SearchBar;