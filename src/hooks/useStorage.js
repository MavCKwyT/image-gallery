import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0); // what is it "0"
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create a reference to the full path of the img, including the file name.
    const storageRef = projectStorage.ref(file.name);
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
        setUrl(imgUrl);
      });
  }, [file]);
  return { progress, error, url };
};

export default useStorage;

// useEffect(()=> {
//   const fooOne = ('event', () => { // произошел event вызывается callback
//     do some
// }, fooTwo() => { //
//   do more
// }, async fooThree = () => {
//     await // do some more asynchronously
// });
// }, [something]);
//   return { other };
// };
