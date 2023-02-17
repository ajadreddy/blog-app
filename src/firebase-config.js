import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
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

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();