
import  firebase  from "firebase/app";
import "firebase/auth";


const appFirebase  = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.EACT_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.EACT_APP_MESSAGING_SENDER ,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export default appFirebase;

