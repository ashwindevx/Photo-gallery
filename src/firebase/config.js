import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjMyLgEqScLXMWn5t3AMZ0KwOkjlFffS0",
  authDomain: "firegram-637bd.firebaseapp.com",
  projectId: "firegram-637bd",
  storageBucket: "firegram-637bd.appspot.com",
  messagingSenderId: "797441657420",
  appId: "1:797441657420:web:355a7b9a97422d90ca02e9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };