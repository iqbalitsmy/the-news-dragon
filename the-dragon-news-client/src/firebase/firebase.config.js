// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG6WLuwhBUzECJSVQpclQ971BeYYQlUVk",
    authDomain: "the-news-dragon-client-ef54f.firebaseapp.com",
    projectId: "the-news-dragon-client-ef54f",
    storageBucket: "the-news-dragon-client-ef54f.appspot.com",
    messagingSenderId: "170165135435",
    appId: "1:170165135435:web:5f5824edaa3c7785b3c5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;