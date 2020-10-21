import firebase from "firebase";

const firebaseConfig = {

    //Firebase Config Files

};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth };