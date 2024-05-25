// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmHKTVwwuD87xGi7Si2KYY3Ha99gNeGo",
  authDomain: "concept-9-firebase-auth.firebaseapp.com",
  projectId: "concept-9-firebase-auth",
  storageBucket: "concept-9-firebase-auth.appspot.com",
  messagingSenderId: "121888901125",
  appId: "1:121888901125:web:a3f6541f6487ad4192746c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)