import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgpfvn08hLcNQysmNImp697MqzUpubDFE",
  authDomain: "linkedin-clone-c4131.firebaseapp.com",
  projectId: "linkedin-clone-c4131",
  storageBucket: "linkedin-clone-c4131.appspot.com",
  messagingSenderId: "74642329917",
  appId: "1:74642329917:web:119a6430294dfb3a1a7554",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
