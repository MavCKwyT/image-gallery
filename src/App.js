import React from 'react';
import './App.css';
import UploadForm from './Components/uploadForm';
// import TestComponent from './Components/testComponent';
// import TestComponentTwo from './Components/testComponentTwo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <UploadForm />
        {/* <TestComponent /> */}
        {/* <TestComponentTwo /> */}
      </>
    );
  }
}

export default App;
