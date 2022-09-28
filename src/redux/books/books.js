import { createStore } from 'redux';

const BookRemoved = 'Book_Removed';
const BookAdded = 'Book_Added';

const lastId = 0;
function booksReducer(state = [], action) {
  switch (action.type) {
    case BookAdded:
      return [...state,
        {
          id: lastId + 1,
          title: action.payload.tilte,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case BookRemoved:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

const bookAdded = (payload) => ({ type: BookAdded, payload });

const bookRemoved = (id) => ({ type: BookRemoved, payload: id });

const store = createStore(booksReducer);
store.dispatch(bookAdded);

export { booksReducer, bookAdded, bookRemoved };
