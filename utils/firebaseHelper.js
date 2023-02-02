
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const getFirebaseApp=()=>{
    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtSGvMZNPes_an_LszkUFCtaq4jgxj2LY",
  authDomain: "whatsapp-5425b.firebaseapp.com",
  projectId: "whatsapp-5425b",
  storageBucket: "whatsapp-5425b.appspot.com",
  messagingSenderId: "827122130040",
  appId: "1:827122130040:web:ba1fd98492be3320fea18d",
  measurementId: "G-3SHSX2ZLSQ"
  };
  
  // Initialize Firebase
return initializeApp(firebaseConfig);
  
}