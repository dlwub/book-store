import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <>
      <p>{category}</p>
      <p>{title}</p>
      <p>{author}</p>
      <div className="btns-container">
        <button type="button" className="comment-btn">Comments</button>
        <button type="button" className="remove-btn">Remove</button>
        <button type="button" className="edit-btn">Edit</button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
