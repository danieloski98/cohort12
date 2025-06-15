// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'; 
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY0j1oqlDZXHcg9uG9UyL77TsXTKTzwiQ",
  authDomain: "hertecttrailapp.firebaseapp.com",
  projectId: "hertecttrailapp",
  storageBucket: "hertecttrailapp.firebasestorage.app",
  messagingSenderId: "1095261820122",
  appId: "1:1095261820122:web:a1d5472ff9882558c2c1e3",
  measurementId: "G-NJDV1JM6D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initializing Modules
const auth = getAuth(app);
const db = getDatabase(app);

export {
  app,
  auth,
  db
}