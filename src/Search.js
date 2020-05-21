import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { parseBookSearch } from './parsebook';
import BooksGrid from './BooksGrid';
import SearchBar from './SearchBar';

const _ = require("lodash");
const debugQuerying = false;

/**
 * App: -> The search screen of the MyReads app.

Note to self on why this calls work as expected:
https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
 Arrow functions in class field properties seem useful because they’re autobind, in short, no need to add this.handleClick = this.handleClick.bind(this) in the constructor.

 */
class Search extends Component {
	state = {
		searchResults: [],
		parsedSearchResults: [],
		query: '',
	};

	// re-render if a book gets added/moved, to update selectors
	// correctly bound to 'this' bc class property
	handleBookAdd = () => {
		this.forceUpdate();
	};

  // correctly bound to 'this' bc class property
	handleQueryChange = (e) => {
		const typed = e.target.value;
		// updating state is quick and cheap, makes for better UX
		this.setState(() => (
		  		{ query: typed } ));

		if (!this.debouncedFn) {
			this.debouncedFn = _.debounce(() => {
		  	// querying is expensive, wait 300ms
		  	this.doSearch();
			}, 300);
		}

		this.debouncedFn();
		debugQuerying && console.log(this.state.query);
	};

	clearResults = () => {
		this.setState((cs) => ( { searchResults: [],
			parsedSearchResults: [] } ));
	};

	doSearch = () => {
		debugQuerying && console.log("[doSearch] query length: " + this.state.query.length + " query: " + this.state.query);
		if (this.state.query.length > 0) {
			const promise = BooksAPI.search(this.state.query);
	    promise.then((r) => {
	    	// querying sets searchResults only - parse it in render()
	    	if (Array.isArray(r)) {
	    		this.setState((cs) => ( { searchResults: r } ));
	    	} else if (
	    		(typeof r === 'object' && 'error' in r)
	    		|| r === null
	    		) {
	    		this.clearResults();
	    	}
	    })
	    .catch(
	    	(e) => {
	    	console.log(e);
	    	this.clearResults();
	    });
		} else {
			this.clearResults();
		}
	};

	render() {
		const { shelfList, shelfChanger, bookAdder, shelvedBooks } = this.props;
		const { searchResults, query } = this.state;

		// Simplify search results, add shelf info
		const parsedSearchResults = searchResults.map((b) => parseBookSearch(b, shelvedBooks));

		const search = (
				<div className="search-books">
	            <SearchBar
	            	onChangeHandler={this.handleQueryChange}
	            	// equivalent:
	            	// onChangeHandler={(e) => {this.handleQueryChange(e)}}
	            	value={query}/>
	            <div className="search-books-results">
	              <BooksGrid
                  	filteredBookList={ parsedSearchResults }
                  	shelfChanger={shelfChanger}
                  	bookAdder={bookAdder}
                  	shelfList={shelfList}
                  	// searchResultsCallBack={() => {this.handleBookAdd()}}
                  	searchResultsCallBack={this.handleBookAdd}
                  	/>
	            </div>
	          </div>
			);
		return search;
	}
}

export default Search;