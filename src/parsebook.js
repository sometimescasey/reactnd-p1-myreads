/* Util functions to parse book from API getAll() or search()
format to expected format for <Book/>
 */

function parseBook(b) {
	let pB = {};
  	pB.id = b.id;
  	pB.title = b.title;
  	pB.authors = b.authors;
  	pB.coverURL = `url(${b.imageLinks.thumbnail})`;

  	// BooksAPI getALl() result returns a 'shelf' key
  	pB.shelf = b.shelf;

  	return pB;
}

/* Variant for the search page which grabs shelf status */
function parseBookSearch(b, shelvedBooks) {

	let pB = parseBook(b);

  	// Search API won't return a 'shelf' key;
  	// set it to 'none', or shelf if it's in our shelved books
  	pB.shelf = 'none';
  	if (pB.id in shelvedBooks) {
  		pB.shelf = shelvedBooks[pB.id].shelf;
  	}
  	return pB;
}

export { parseBook, parseBookSearch };