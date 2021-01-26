import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAOAK9-ZqfLoVKExtZqcRRvDIBbnCQwV4U",
    authDomain: "scheduler-ac05e.firebaseapp.com",
    databaseURL: "https://scheduler-ac05e-default-rtdb.firebaseio.com",
    projectId: "scheduler-ac05e",
    storageBucket: "scheduler-ac05e.appspot.com",
    messagingSenderId: "403259147690",
    appId: "1:403259147690:web:52fc3ad0f30fc1765e97d3",
    measurementId: "G-3CYKTTQ5ML"    
};

firebase.initializeApp(firebaseConfig);

export { firebase };