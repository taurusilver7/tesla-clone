import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7QUzwdtkEISWgJS-gUkXwtNbjXSAaBlo",
  authDomain: "tesla-b5ec0.firebaseapp.com",
  projectId: "tesla-b5ec0",
  storageBucket: "tesla-b5ec0.appspot.com",
  messagingSenderId: "807758940677",
  appId: "1:807758940677:web:8d94cb4a4f98ab7eb56a6c",
  measurementId: "G-83G5G6X19C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
