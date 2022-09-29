import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

function booksReducer(state =
[
  {
    id: uuidv4(),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    id: uuidv4(),
    title: 'Mindset',
    author: 'Carol Dweck',
  },
],
action) {
  switch (action.type) {
    case 'book_added':
      return [...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case 'book_removed':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

const bookAdded = (payload) => ({ type: 'book_added', payload });

const bookRemoved = (id) => ({ type: 'book_removed', payload: id });

const store = createStore(booksReducer);

export {
  booksReducer, bookAdded, bookRemoved, store,
};
