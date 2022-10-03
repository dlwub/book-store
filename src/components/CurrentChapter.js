import React from 'react';
import PropTypes from 'prop-types';

const CurrentChapter = (props) => {
  const { currentChapter } = props;
  return (
    <div className="chapter-container">
      <div className="chapter-title">Current Chapter</div>
      <div>{currentChapter}</div>
      <button type="button" className="update-btn">UPDATE PROGRESS</button>
    </div>
  );
};

CurrentChapter.propTypes = {
  currentChapter: PropTypes.string.isRequired,
};

export default CurrentChapter;
