// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChRwwnGCXOHOsBCss2HOuJ3BcP89n6ojI",
  authDomain: "fitness-db-f612b.firebaseapp.com",
  projectId: "fitness-db-f612b",
  storageBucket: "fitness-db-f612b.appspot.com",
  messagingSenderId: "515127989812",
  appId: "1:515127989812:web:841dedf5c04de4431f5c61",
  measurementId: "G-634L3YRMQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);