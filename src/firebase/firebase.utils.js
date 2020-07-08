import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAvTH9MG9uV2wDX47cqxC4vltv7EK9UIm0',
  authDomain: 'tony-clothing-shop.firebaseapp.com',
  databaseURL: 'https://tony-clothing-shop.firebaseio.com',
  projectId: 'tony-clothing-shop',
  storageBucket: '',
  messagingSenderId: '308413904573',
  appId: '1:308413904573:web:7f5d908d96f417ad',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
