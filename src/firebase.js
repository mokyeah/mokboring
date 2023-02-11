// Import the functions you need from the SDKs you need
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'
import { GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU1EdBhFh7i4gQpWbbgY7RPVSM0e-4ny8",
  authDomain: "blog-d81e0.firebaseapp.com",
  projectId: "blog-d81e0",
  storageBucket: "blog-d81e0.appspot.com",
  messagingSenderId: "69039021647",
  appId: "1:69039021647:web:34bbf855ab08b7934d543a",
  measurementId: "G-XNRTWEVV00"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const firestore =  firebase.firestore();
export const provider = new GoogleAuthProvider();
export const auth = firebase.auth();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
  .then(async({user, additionalUserInfo}) => { console.log(user, additionalUserInfo)
    if (additionalUserInfo.isNewUser) {
      await setDoc(doc(firestore, "users", user.uid), {
        name: user.displayName,
        
        picture: user.photoURL,
        introduction: "",
      });
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};
