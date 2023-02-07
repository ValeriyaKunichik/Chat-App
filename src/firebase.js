import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBlCfTdOrp2ZdgzQbZU9zWtSIK4x_fYZEk",
    authDomain: "mychat-54a2d.firebaseapp.com",
    projectId: "mychat-54a2d",
    storageBucket: "mychat-54a2d.appspot.com",
    messagingSenderId: "327996546832",
    appId: "1:327996546832:web:0866c54b1bc44483d40f95"
}).auth()