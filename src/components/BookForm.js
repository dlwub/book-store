import React from 'react';

function BookForm() {
  const [formData, setFormData] = React.useState({ title: '', author: '', category: '' });
  function handleChange(e) {
    setFormData((prevFormData) => {
      const { name, value } = e.target;
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          placeholder="Book title"
          onChange={handleChange}
          name="titleInput"
          value={formData.title}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={handleChange}
          name="authorInput"
          value={formData.author}
          required
        />
        <select
          id="category"
          value={formData.category}
          onChange={handleChange}
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
