import React from 'react';
import PropTypes from 'prop-types';

const CircularProgress = (props) => {
  const { percentage } = props;
  return (
    <div className="progress-container">
      <div
        className="circular-progress"
        style={{ background: `conic-gradient(#0f5298 ${percentage * 3.6}deg, #ededed 0deg)` }}
      />
      <div className="stat-container">
        <div className="percentage">
          { percentage }
          %
        </div>
        <div className="completed">Completed</div>
      </div>
    </div>
  );
};

CircularProgress.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default CircularProgress;
