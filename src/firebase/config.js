import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_AP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

export default firebase;