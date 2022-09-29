import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const displayBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));
  return (
    <div>{ displayBooks }</div>
  );
}
export default BookList;
