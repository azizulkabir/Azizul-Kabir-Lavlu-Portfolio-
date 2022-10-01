// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVSPGhzfbHuuZJg69dGWbUQ94LNFVzNU",
  authDomain: "azizulkabirlavlu.firebaseapp.com",
  projectId: "azizulkabirlavlu",
  storageBucket: "azizulkabirlavlu.appspot.com",
  messagingSenderId: "275799839281",
  appId: "1:275799839281:web:af4468633466eecfcdbb10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;