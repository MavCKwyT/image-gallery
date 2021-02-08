import React from 'react';
import useFireStore from '../hooks/useFireStore';

const ImageGrid = () => {
  const { docs } = useFireStore('images');

  return (
    <div className="img-grid">
      { docs && docs.map((doc) => (
        <div className="img-wrap" key={doc.id}>
          <img src={doc.imgUrl} alt="uploaded img" />
        </div>
      ))}
    </div>
  );
};
export default ImageGrid;
