export function selectBook(book) {

	// selectBook returns action: Object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}