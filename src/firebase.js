import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCSZKD39PkxMEteMkPkq9cojt5wTaYYHFQ',
  authDomain: 'react-cash-flow.firebaseapp.com',
  databaseURL: 'https://react-cash-flow.firebaseio.com',
  projectId: 'react-cash-flow',
  storageBucket: 'react-cash-flow.appspot.com',
  messagingSenderId: '331861258302'
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
