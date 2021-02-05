import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import React from 'react';

// Functional component

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('please select an image file (png or jpeg)');
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="error">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

// Class component

// class UploadForm extends React.Component {
//    imgTypes = ['image/png', 'image/jpeg'];
//
//    constructor(props) {
//      super(props);
//      this.state = {
//        file: null,
//        error: null,
//      };
//    }
//
//   changeHandler = (event) => {
//     const uploadedImg = event.target.files[0];
//     if (uploadedImg && this.imgTypes.includes(uploadedImg.type)) {
//       this.setState({ file: uploadedImg });
//       this.setState({ error: '' });
//     } else {
//       this.setState({ file: null });
//       this.setState({ error: 'please select an image file (png or jpeg)' });
//     }
//   }
//
//   render() {
//     return (
//       <form>
//         <input type="file" onChange={this.changeHandler} />
//         <div className="output">
//           {
//             this.state.error
//             && <div className="error">{this.state.error}</div>
//           }
//           {
//             this.state.file
//             && <div className="error">{this.state.file.name}</div>
//           }
//         </div>
//       </form>
//     );
//   }
// }
//
// export default UploadForm;
