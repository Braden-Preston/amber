import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDan-qTp_Kaj4yFmA5NI2q3HvtpcWG0wIY",
    authDomain: "amber-b77ba.firebaseapp.com",
    databaseURL: "https://amber-b77ba.firebaseio.com",
    projectId: "amber-b77ba",
    storageBucket: "amber-b77ba.appspot.com",
    messagingSenderId: "573379796799"
}

// Initialize Firebase Project
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// Fix for Firebase 5.0.4 Timestamp Deprecation
firebase.firestore().settings({
    timestampsInSnapshots: true
})


const db = firebase.firestore();
const auth = firebase.auth();

export {
    auth,
    db
};