import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBtKcj83AR4gR8xX2S6QJKaOw0agLQm4Wk',
  authDomain: 'image-gallery-649a2.firebaseapp.com',
  databaseURL: 'https://image-gallery-649a2-default-rtdb.firebaseio.com',
  projectId: 'image-gallery-649a2',
  storageBucket: 'image-gallery-649a2.appspot.com',
  messagingSenderId: '139327159449',
  appId: '1:139327159449:web:140752ac97201ab6e40c08',

});
const db = firebaseApp.firestore(); // Cloud Firestore
const storage = firebase.storage();

export { db, storage };
