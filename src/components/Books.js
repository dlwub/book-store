import React from 'react';
import BookForm from './BookForm';
import BookList from '../redux/BookList';

const Books = () => (
  <>
    <div className="booksList" />
    <BookList />
    <BookForm />
  </>
);

export default Books;
