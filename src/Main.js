import React from 'react';
import MainHeader from './MainHeader';
import MainShelves from './MainShelves';
import MainSearchButton from './MainSearchButton';

/**
 * App: -> The main screen of the MyReads app.
 */
function Main(props) {
	const { shelvedBooks, shelfChanger, shelfList } = props;
	let mainPage = (
		<div className="list-books">
            <MainHeader/>
            <MainShelves
            	shelvedBooks={shelvedBooks}
            	shelfChanger={shelfChanger}
            	shelfList={shelfList} />
            <MainSearchButton/>
        </div>
	);
	return mainPage;
}

export default Main;