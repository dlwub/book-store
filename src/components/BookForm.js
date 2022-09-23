import React from 'react';

const BookForm = () => (
  <>
    <h3>ADD NEW BOOK</h3>
    <div className="input-btn-container">
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <select id="category">
        <option value="" disabled selected hidden>Category</option>
      </select>
      <button type="submit" className="add-btn">ADD BOOK</button>
    </div>

  </>
);

export default BookForm;
