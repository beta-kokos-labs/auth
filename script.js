import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXE3Be_UJAcUarWTtRTfDCCwC1OhGNiUE",
  authDomain: "opencdo.firebaseapp.com",
  databaseURL: "https://opencdo-default-rtdb.firebaseio.com",
  projectId: "opencdo",
  storageBucket: "opencdo.appspot.com",
  messagingSenderId: "908986857627",
  appId: "1:908986857627:web:bb2cccccb3f8e684e9ee3e",
  measurementId: "G-P24SC6R2TR"
};

// Initialize Firebase and the Google Auth Provider
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
