import React from 'react';
import Store from '../store/Store';

const TestComponentTwo = () => (
  <div>
    {Store.images.map((el) => <div className="image">{el}</div>)}
  </div>
);

export default TestComponentTwo;
