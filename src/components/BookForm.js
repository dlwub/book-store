import React from 'react';

function BookForm() {
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form className="book-form">
        <input
          type="text"
          placeholder="Book title"
          name="titleInput"
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="authorInput"
          required
        />
        <select
          id="category"
          name="selectForm"
        >
          <option value="" disabled hidden>Category</option>
        </select>
        <input type="submit" value="ADD BOOK" className="add-btn" />
      </form>
    </>
  );
}

export default BookForm;
