import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <div key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <div className="btns-container">
        <button type="button" className="comment-btn">Comments</button>
        <button type="button" onClick={() => dispatch(removeBook(id))} className="remove-btn">Remove</button>
        <button type="button" className="edit-btn">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
