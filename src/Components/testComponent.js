import React from 'react';

const TestComponent = () => {
  const func = (e) => {
    const uploadedImg = e.target.files[0];
    URL.createObjectURL(uploadedImg);
  };

  return (
    <>
      <input type="file" onChange={func} />
    </>
  );
};

export default TestComponent;
