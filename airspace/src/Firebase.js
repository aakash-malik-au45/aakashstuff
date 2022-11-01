import {  initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKrWJ61lomoUh5y953HSs74Tm4-ufOAq0",
    authDomain: "tesla-9fe76.firebaseapp.com",
    projectId: "tesla-9fe76",
    storageBucket: "tesla-9fe76.appspot.com",
    messagingSenderId: "795640977734",
    appId: "1:795640977734:web:820f8f13c643a55245ed47"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp )
  
  export { auth }