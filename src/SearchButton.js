import React from 'react';

/**
 * Search button
 */
function SearchButton(props) {
	return (
		<div className="open-search">
			<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
		</div>
	);
}

export default SearchButton;

