import React from 'react';
import MainHeader from './MainHeader';
import MainShelves from './MainShelves';
import SearchButton from './SearchButton';

/**
 * App: -> The main screen of the MyReads app.
 */
function Main(props) {
	const { shelvedBooks, shelfChanger, shelfList, changeSearchState } = props;
	let mainPage = (
		<div className="list-books">
            <MainHeader/>
            <MainShelves
            	shelvedBooks={shelvedBooks}
            	shelfChanger={shelfChanger}
            	shelfList={shelfList} />
            <SearchButton
                changeSearchState={changeSearchState}/>
        </div>
	);
	return mainPage;
}

export default Main;