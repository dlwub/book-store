import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const category = document.querySelector('.category').value;
    dispatch(addBook({
      item_id: id, title, author, category,
    }));
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form
        type="submit"
        value="ADD BOOK"
      >
        <input
          type="text"
          placeholder="Book title"
          className="title"
        />
        <input
          type="text"
          placeholder="Author"
          className="author"
        />
        <input
          type="text"
          placeholder="Category"
          className="category"
        />
        <button
          type="submit"
          onClick={handleClick}
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
}

export default BookForm;
