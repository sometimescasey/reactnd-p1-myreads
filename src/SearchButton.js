import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Main: -> Search button
 */
function SearchButton(props) {
	/* TODO: clean up search state passing stuff */
	const { changeSearchState } = props;
	return (
		<div className="open-search">
			<Link to="/search">
				<button>Add a book</button>
			</Link>
		</div>
	);
}

export default SearchButton;

