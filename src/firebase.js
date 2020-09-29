import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlK8L3Jv2Gz4kXvD4SwSl2fdyAejRFV4I",
  authDomain: "clone-3bf30.firebaseapp.com",
  databaseURL: "https://clone-3bf30.firebaseio.com",
  projectId: "clone-3bf30",
  storageBucket: "clone-3bf30.appspot.com",
  messagingSenderId: "149853988394",
  appId: "1:149853988394:web:0f683057dbd8dc82b58553",
  measurementId: "G-7BQLWBG5Y2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
