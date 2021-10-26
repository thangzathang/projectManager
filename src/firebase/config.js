import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZTs8cVZ5BpaIyCxUqALmycFeJdEXJPs",
  authDomain: "fridaydotcom-ce5c4.firebaseapp.com",
  projectId: "fridaydotcom-ce5c4",
  storageBucket: "fridaydotcom-ce5c4.appspot.com",
  messagingSenderId: "762539414299",
  appId: "1:762539414299:web:4d5d881417e9cd885bf9be",
};

// Init fire base - it needs our config from Firebase settings.
firebase.initializeApp(firebaseConfig);

// Init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
