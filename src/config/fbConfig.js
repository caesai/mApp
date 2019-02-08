import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyABRy7u0HOqlFCJTHLhfLHGOrK2IwesgjQ",
    authDomain: "simple-b92cd.firebaseapp.com",
    databaseURL: "https://simple-b92cd.firebaseio.com",
    projectId: "simple-b92cd",
    storageBucket: "simple-b92cd.appspot.com",
    messagingSenderId: "652849002967"
};
firebase.initializeApp(config);

export default firebase ;