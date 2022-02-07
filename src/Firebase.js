// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_FjjxLk_TcdptHxMDD7qvJ3LAOeLWxkI",
  authDomain: "login-2-f027c.firebaseapp.com",
  databaseURL: "https://login-2-f027c-default-rtdb.firebaseio.com",
  projectId: "login-2-f027c",
  storageBucket: "login-2-f027c.appspot.com",
  messagingSenderId: "1035913125382",
  appId: "1:1035913125382:web:e451a24e3f578408f1ad87"
};

// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
export default fireDB;

export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
    signOut(auth);
}

// Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
       const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user))

       return unsub;
    }, [])

    return currentUser;
}

