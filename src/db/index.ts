import firebase from 'firebase/app';
import 'firebase/database';

let config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'react-mymoney.firebaseapp.com',
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: 'react-mymoney.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: 'https://react-mymoney-default-rtdb.firebaseio.com/',
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export default firebase.database();
