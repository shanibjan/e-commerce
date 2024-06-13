
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyAnBvXspYAZ83EJfKphz3hnoo6KefiAbsc",
  authDomain: "fb-ecom.firebaseapp.com",
  projectId: "fb-ecom",
  storageBucket: "fb-ecom.appspot.com",
  messagingSenderId: "482175947883",
  appId: "1:482175947883:web:014caee268744d72ea4d2e",
  measurementId: "G-76TDDE0H1Y"
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);