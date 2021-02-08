import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtKcj83AR4gR8xX2S6QJKaOw0agLQm4Wk',
  authDomain: 'image-gallery-649a2.firebaseapp.com',
  projectId: 'image-gallery-649a2',
  storageBucket: 'image-gallery-649a2.appspot.com',
  messagingSenderId: '139327159449',
  appId: '1:139327159449:web:140752ac97201ab6e40c08',
};

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp; // what is it

export { projectStorage, projectFirestore, timeStamp };
