// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const FirebaseConfig = {
    apiKey: "AIzaSyBAc4NR4P3xLHtWfmck1Qvf_k-kgqftEIE",
    authDomain: "todo-list-124.firebaseapp.com",
    projectId: "todo-list-124",
    storageBucket: "todo-list-124.appspot.com",
    messagingSenderId: "193852773582",
    appId: "1:193852773582:web:fa741289d64dbff96f6c9f",
    measurementId: "G-SFSCXSXMVN"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app)

export { auth, db };
export default FirebaseConfig;