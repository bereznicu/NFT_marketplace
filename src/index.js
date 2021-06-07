import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCGlL8KnpgmD-pz3kxrCDXYHjTWcPC9SjQ",
  authDomain: "artistic-65536.firebaseapp.com",
  projectId: "artistic-65536",
  storageBucket: "artistic-65536.appspot.com",
  messagingSenderId: "164258267236",
  appId: "1:164258267236:web:890f4cccfd9dd45a155f71",
  measurementId: "G-PKJBNYN9ZM"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
