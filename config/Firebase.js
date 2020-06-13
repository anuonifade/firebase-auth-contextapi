import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initializing firebase
firebase.initializeApp(firebaseConfig);

const Firebase = {

  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },

  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },

  signOut: () => {
    return firebase.auth().signOut()
  },

  checkUserAuth: (user) => {
    return firebase.auth().onAuthStateChanged(user)
  },

  // firestore to store user data
  createNewUser: (userData) => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData}.uid`)
      .set(userData)
  }
}

// Firestore uses NoSQL

export default Firebase;