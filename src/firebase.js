import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyAf4kBLH0s_lJdv7bRXzkVJwUc_9lKuLD0",
    authDomain: "clone-c4a90.firebaseapp.com",
    databaseURL: "https://clone-c4a90.firebaseio.com",
    projectId: "clone-c4a90",
    storageBucket: "clone-c4a90.appspot.com",
    messagingSenderId: "129757664958",
    appId: "1:129757664958:web:7a7f14f78deb94324ff0ef",
    measurementId: "G-FSTWFD8NZ4",

};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth };