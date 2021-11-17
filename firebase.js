import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCczOXnX68ZIPKaC6MknButGCxkYHRm3iw",
    authDomain: "nextjs-disneyplus-clone-332312.firebaseapp.com",
    projectId: "nextjs-disneyplus-clone-332312",
    storageBucket: "nextjs-disneyplus-clone-332312.appspot.com",
    messagingSenderId: "787181269616",
    appId: "1:787181269616:web:41c9a3e0e6a748695bfab5",
};

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = app.firestore();

export { db };