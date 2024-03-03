import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLr8YGYazL5_OhvVD920VMUcpTCsX7jR8",
  authDomain: "react-firebase-7ab51.firebaseapp.com",
  projectId: "react-firebase-7ab51",
  storageBucket: "react-firebase-7ab51.appspot.com",
  messagingSenderId: "925095151775",
  appId: "1:925095151775:web:ff42f5f39e907e52493aaa",
  measurementId: "G-M2D2M0W5ZR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
