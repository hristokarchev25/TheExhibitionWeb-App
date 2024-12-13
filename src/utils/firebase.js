import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBpzjRssd7UfQWFw4tz8P1pXIbE6kiq0YQ",
    authDomain: "the-exhibition-app.firebaseapp.com",
    projectId: "the-exhibition-app",
    storageBucket: "the-exhibition-app.firebasestorage.app",
    messagingSenderId: "551791094162",
    appId: "1:551791094162:web:c7c59bcffd4d62e7e7394b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();
export const db = firebase.firestore();