import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); // what is it
        });
        setDocs(documents);
      });
    return () => unsub(); // what is it
  }, [collection]);
  return { docs };
};

export default useFireStore;
