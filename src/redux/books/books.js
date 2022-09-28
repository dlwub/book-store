import { createStore } from 'redux';

const lastId = 0;
function booksReducer(state = [], action) {
	switch (action.type) {
		case 'bookAdded':
			return [...state,
				{
					id: lastId + 1,
					title: action.payload.tilte,
					author: action.payload.author,
					category: action.payload.category,
				},
			];
		case 'bookRemoved':
			return state.filter((book) => book.id !== action.payload.id);
		default:
			return state;
	}
}

const bookAdded = (book) => {
	return {
		type: actions.bookAdded,
		payload: {
			id:book.id,
			title: book.tilte,
			author: book.author,
			category: book.category
		}
	}
}

const bookRemoved = (id) => {
	return {
		type: actions.bookRemoved,
		payload: id
}
}

const store = createStore(booksReducer);

export {booksReducer, bookAdded, bookRemoved};
