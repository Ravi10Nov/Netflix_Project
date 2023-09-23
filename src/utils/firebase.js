// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1felYYvYMPse-_FF6W2uqtEQCvRRzW2Y",
  authDomain: "netflix-gpt-2b6b9.firebaseapp.com",
  projectId: "netflix-gpt-2b6b9",
  storageBucket: "netflix-gpt-2b6b9.appspot.com",
  messagingSenderId: "880258901626",
  appId: "1:880258901626:web:553bd7bb05afd19a593dc3",
  measurementId: "G-YD35N9DXM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();