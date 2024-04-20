// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6m10rE5vH-bt_PLjh-jIUVAJPagjS060",
  authDomain: "citylens-asea.firebaseapp.com",
  projectId: "citylens-asea",
  storageBucket: "citylens-asea.appspot.com",
  messagingSenderId: "686557436228",
  appId: "1:686557436228:web:e1f607da50e7d6a1e25f11",
  measurementId: "G-BXYVEN2MS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);