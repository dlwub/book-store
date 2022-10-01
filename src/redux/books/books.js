import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5qJ4MMb3pYrSXnMgN6ia/books';

const ADDBOOK = 'books/books/book_added';
const REMOVEBOOK = 'books/books/book_removed';
const FETCHBOOK = 'books/books/book_fetched';

export function fetchBooksSucceeded(books) {
  return {
    type: FETCHBOOK,
    payload: books,
  };
}

export function addBookSucceeded(book) {
  return {
    type: ADDBOOK,
    payload: book,
  };
}

function removeBookSucceeded(id) {
  return {
    type: REMOVEBOOK,
    payload: id,
  };
}

export const fetchBooks = () => (dispatch) => {
  axios.get(API_BASE_URL).then((response) => {
    const books = Object.keys(response.data).map((key) => {
      const book = response.data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch(fetchBooksSucceeded(books));
  });
};

export const addBook = (book) => (dispatch) => {
  axios.post(API_BASE_URL, book).then(() => dispatch(addBookSucceeded(book)));
};

export const removeBook = (id) => (dispatch) => {
  axios.delete(`${API_BASE_URL}/${id}`, { item_id: id })
    .then(() => dispatch(removeBookSucceeded(id)));
};

function booksReducer(state = [], action) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCHBOOK:
      return action.payload;
    default:
      return state;
  }
}

export {
  booksReducer,
};
