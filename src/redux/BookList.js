import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './books/books';
import Book from '../components/Book';
import data from '../components/ProgressData';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const zip = (books, data) => books.map((book, index) => Object.assign(book, data[index]));
  const merged = zip(books, data);
  const displayBooks = merged.map((book) => (

    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
      category={book.category}
      percentage={book.percentage}
      currentChapter={book.currentChapter}
    />
  ));
  return (
    <div>{ displayBooks }</div>
  );
}
export default BookList;
