// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgWmmVdt87zC94ghhQja1a0qkMcUTCPX8",
  authDomain: "countdownlafycomeback.firebaseapp.com",
  projectId: "countdownlafycomeback",
  storageBucket: "countdownlafycomeback.appspot.com",
  messagingSenderId: "393937706289",
  appId: "1:393937706289:web:c3621ef1827bd4ff802410",
  measurementId: "G-HWMP5KWVGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export default firestore

