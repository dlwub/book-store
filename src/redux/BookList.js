import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './books/books';
import Book from '../components/Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const displayBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));
  return (
    <div>{ displayBooks }</div>
  );
}
export default BookList;
