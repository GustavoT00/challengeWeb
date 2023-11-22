// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxqEGgDS3iNU7QZR585328V34T58QRg7U",
  authDomain: "challengeweb-a204a.firebaseapp.com",
  databaseURL: "gs://challengeweb-a204a.appspot.com",
  projectId: "challengeweb-a204a",
  storageBucket: "challengeweb-a204a.appspot.com",
  messagingSenderId: "223840837056",
  appId: "1:223840837056:web:8b166f32f74389c44abc25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

const firebaseStorage = getStore(app)

export {app,auth, firebaseStorage}