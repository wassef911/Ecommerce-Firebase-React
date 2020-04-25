import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;
  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        photoURL,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userRef;
};
export const createIssueDocuments = async (Message) => {
  if (!Message) return null;
  try {
    await db.doc("issues").set({
      Message,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();

export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
