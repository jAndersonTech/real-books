// State argument is not app state,
// only a piece of the state
export default function(state = null, action) {

	switch(action.type) {
		case 'BOOK_SELECTED': 
			return action.payload;
		default: 
			return state;
	}
}