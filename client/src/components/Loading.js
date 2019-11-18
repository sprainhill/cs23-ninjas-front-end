import React from 'react';
import { RingSpinner } from 'react-spinners-kit';

const Loading = () => {
  return (
    <div className="Loading-container">
      <RingSpinner size={100} color="#35FF69" className="loader" />
    </div>
  );
};

export default Loading;
