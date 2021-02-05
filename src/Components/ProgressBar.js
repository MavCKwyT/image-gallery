import React from 'react';
import useStorage from '../hooks/useStorage';

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ file }) => { // setFile
  const { url, progress } = useStorage(file); // how it works
  return (
    <div className="progress-bar">Progress</div>
  );
};

export default ProgressBar;
