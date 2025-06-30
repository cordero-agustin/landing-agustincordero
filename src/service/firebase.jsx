// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi4oKcRgNCkMKzjRNGrJTyhT2b3qIhdFQ",
  authDomain: "industore-4ca71.firebaseapp.com",
  projectId: "industore-4ca71",
  storageBucket: "industore-4ca71.firebasestorage.app",
  messagingSenderId: "1058490805242",
  appId: "1:1058490805242:web:2ed40281ec55cdb7115243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
