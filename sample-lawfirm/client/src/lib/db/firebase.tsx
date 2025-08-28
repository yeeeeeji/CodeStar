// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcuDo3STvjTW9JLeq898NnOvwwJlEYuTU",
  authDomain: "codestar-lawfirm.firebaseapp.com",
  projectId: "codestar-lawfirm",
  storageBucket: "codestar-lawfirm.firebasestorage.app",
  messagingSenderId: "647665859175",
  appId: "1:647665859175:web:a7f6106a8e781bd5e032c2",
  measurementId: "G-ZL96ZPNPWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db: Firestore = getFirestore(app);