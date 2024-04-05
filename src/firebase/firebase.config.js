// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhwYYUG5jR8sFbiXSJmVkX1VgBa1AZHjI",
    authDomain: "react-dragon-news-auth-490b6.firebaseapp.com",
    projectId: "react-dragon-news-auth-490b6",
    storageBucket: "react-dragon-news-auth-490b6.appspot.com",
    messagingSenderId: "842861126097",
    appId: "1:842861126097:web:a2a702d434785812a240f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app;
export default auth;