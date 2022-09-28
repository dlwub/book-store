import { createStore } from 'redux';

const Book_Removed = 'Book_Removed';
const Book_Added = 'Book_Added';

const lastId = 0;
function booksReducer(state = [], action) {
  switch (action.type) {
    case Book_Added:
      return [...state,
        {
          id: lastId + 1,
          title: action.payload.tilte,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case Book_Removed:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

const bookAdded = (payload) => ({ type: Book_Added, payload });

const bookRemoved = (id) => ({ type: Book_Removed, payload: id });

const store = createStore(booksReducer);
store.dispatch(bookAdded);

export { booksReducer, bookAdded, bookRemoved };
