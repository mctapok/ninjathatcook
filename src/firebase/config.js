import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV2Nz0xqbipOyvvmQTDVj-6Sfo62Z69uQ",
    authDomain: "ninjathatcook.firebaseapp.com",
    projectId: "ninjathatcook",
    storageBucket: "ninjathatcook.appspot.com",
    messagingSenderId: "212283451276",
    appId: "1:212283451276:web:99ca570b2bf083b7a698a9"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export {projectFirestore}