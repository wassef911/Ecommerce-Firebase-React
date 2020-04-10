import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCyhZJA1aZcQlCiwU-Ov8HQBsYl1FgWK8c",
  authDomain: "cloth-store-6d5c0.firebaseapp.com",
  databaseURL: "https://cloth-store-6d5c0.firebaseio.com",
  projectId: "cloth-store-6d5c0",
  storageBucket: "cloth-store-6d5c0.appspot.com",
  messagingSenderId: "686652045184",
  appId: "1:686652045184:web:806c846e8d78cb5b6d3365",
  measurementId: "G-FMK7W84WN9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
