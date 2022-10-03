import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import CurrentChapter from './CurrentChapter';
import CircularProgress from './CircularProgress';

const Book = (props) => {
  const {
    id, title, author, category, percentage, currentChapter,
  } = props;
  const dispatch = useDispatch();

  return (
    <div key={id} className="book">
      <div className="book-detail">
        <div className="text category">{category}</div>
        <div className="text title">{title}</div>
        <div className="text author">{author}</div>
        <div className="btns-container">
          <button type="button" className="btn comment-btn">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))} className="btn remove-btn">Remove</button>
          <button type="button" className="btn edit-btn">Edit</button>
        </div>
      </div>
      <CircularProgress percentage={percentage} />
      <CurrentChapter currentChapter={currentChapter} />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Book;
