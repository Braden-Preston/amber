import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDan-qTp_Kaj4yFmA5NI2q3HvtpcWG0wIY",
    authDomain: "amber-b77ba.firebaseapp.com",
    databaseURL: "https://amber-b77ba.firebaseio.com",
    projectId: "amber-b77ba",
    storageBucket: "amber-b77ba.appspot.com",
    messagingSenderId: "573379796799"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    auth,
};