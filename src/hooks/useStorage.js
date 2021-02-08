import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create a reference to the full path of the img, including the file name.
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    // write data into firebase storage and listen for upload progress of img
    storageRef.put(file).on('state_changed',
      (dataSnapshot) => {
        const percentage = (dataSnapshot.bytesTransferred / dataSnapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // Handle unsuccessful uploads
        setError(err);
      },
      // Handle successful uploads on complete
      async () => {
        const imgUrl = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        await collectionRef.add({ imgUrl, createdAt }); // what is it
        setUrl(imgUrl);
      });
  }, [file]);
  return { progress, error, url };
};

export default useStorage;

// class UseStorage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       progress: 0,
//       error: null,
//       url: null,
//     };
//   }
//
//   render() {
//     return (
//       <div />
//     );
//   }
// }
