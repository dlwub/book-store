import React from 'react';
import BookForm from './BookForm';
import BookList from '../redux/BookList';

const Books = () => (
  <>
    <div className="books-list">
      <BookList />
      <BookForm />
    </div>
  </>
);

export default Books;
