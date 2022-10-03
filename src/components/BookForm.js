import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.querySelector('.title-input').value;
    const author = document.querySelector('.author-input').value;
    const category = document.querySelector('.category-input').value;
    dispatch(addBook({
      item_id: id, title, author, category,
    }));
  };

  return (
    <div className="book-form">
      <h3 className="add-title">ADD NEW BOOK</h3>
      <form
        type="submit"
        value="ADD BOOK"
      >
        <input
          type="text"
          name="title"
          placeholder="Book title"
          className="input title-input"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="input author-input"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input category-input"
        />
        <button
          type="submit"
          className="add-btn"
          onClick={handleClick}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BookForm;
