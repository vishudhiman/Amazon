import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCELs4Cm4kVdc4NkM2xTcAC3LFFbk6NC30",
  authDomain: "clone-fe0b5.firebaseapp.com",
  databaseURL: "https://clone-fe0b5.firebaseio.com",
  projectId: "clone-fe0b5",
  storageBucket: "clone-fe0b5.appspot.com",
  messagingSenderId: "155795653665",
  appId: "1:155795653665:web:4ee62227c1e10a5f184f60",
  measurementId: "G-XRP2ZVTWR5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };