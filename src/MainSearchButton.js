import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Main: -> Search button
 */
function MainSearchButton(props) {
	return (
		<div className="open-search">
			<Link to="/search">
				<button>Add a book</button>
			</Link>
		</div>
	);
}

export default MainSearchButton;

