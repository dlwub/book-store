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

const bookAdded = (payload) => ({ type: 'Book_Added', payload });

const bookRemoved = (id) => ({ type: 'Book_Removed', payload: id });

const store = createStore(booksReducer);
store.dispatch(bookAdded);

export { booksReducer, bookAdded, bookRemoved };
