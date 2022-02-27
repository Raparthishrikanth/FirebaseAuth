// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkt6qLOF6HX8BL7x8Suv6k8as6Vbl66iM",
  authDomain: "loggy-39520.firebaseapp.com",
  projectId: "loggy-39520",
  storageBucket: "loggy-39520.appspot.com",
  messagingSenderId: "153338955748",
  appId: "1:153338955748:web:cafb9e7016269457c029f1",
  measurementId: "G-YQ1RJTR78B"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);