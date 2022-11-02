import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCCHUMo-wVekodOAFm6kKc4hzEDCuDj5yo",
    authDomain: "whatsapp-clone-ab21d.firebaseapp.com",
    projectId: "whatsapp-clone-ab21d",
    storageBucket: "whatsapp-clone-ab21d.appspot.com",
    messagingSenderId: "763520432496",
    appId: "1:763520432496:web:a574b745a27aba833077b5",
    measurementId: "G-LBTRTHZ9EH"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;