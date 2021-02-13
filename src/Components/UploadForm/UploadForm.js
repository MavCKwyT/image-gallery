import React from 'react';
import firebase from 'firebase';
import { db, storage } from '../../firebase/firebaseConfig';

// controlled component
class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      caption: '',
      progress: 0,
    };
  }

  handleChange = (e) => {
    const uploadedImage = e.target.files[0]; // get file which we selected from file props obj
    if (uploadedImage) {
      this.setState({ image: uploadedImage });
    }
  }

  handleUpload = () => {
    const { image, caption } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // listener
    uploadTask.on( // https://firebase.google.com/docs/reference/js/firebase.storage.UploadTask#on
      'state_changed',
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        this.setState({ progress });
      },
      // if something went wrong
      ((error) => alert(error.message)),
      // if upload completed
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((imageUrl) => {
            // post image inside db
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption,
              imageUrl,
            });
            this.setState({ image: null });
            this.setState({ caption: '' });
            this.setState({ progress: 0 });
          });
      },
    );
  }

  render() {
    const { caption, progress } = this.state; // this.state.file -> { ... }
    return (
      <form className="form">
        <progress value={progress} max="100" />
        <input
          type="text"
          placeholder="Enter a caption..."
          onChange={(event) => this.setState({ caption: event.target.value })}
          value={caption}
        />
        <input type="file" onChange={this.handleChange} />
        <button type="button" onClick={this.handleUpload}>Upload</button>
      </form>
    );
  }
}

export default UploadForm;
