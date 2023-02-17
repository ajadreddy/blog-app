// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbRs--VyUQ97RY-r9-zsv5nQix8yEBVLs",
    authDomain: "blogproject-f7a8f.firebaseapp.com",
    projectId: "blogproject-f7a8f",
    storageBucket: "blogproject-f7a8f.appspot.com",
    messagingSenderId: "995992855598",
    appId: "1:995992855598:web:76ea6c96445f100e216bbf",
    measurementId: "G-CNCR9HCZRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);