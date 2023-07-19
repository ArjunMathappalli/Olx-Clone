import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRBMjShQHmgwrjh3f__ZRowtK1ecgxfyI",
    authDomain: "olx-clone-3f2ea.firebaseapp.com",
    projectId: "olx-clone-3f2ea",
    storageBucket: "olx-clone-3f2ea.appspot.com",
    messagingSenderId: "2328549640",
    appId: "1:2328549640:web:c4a4f48b92fd0ed0fc74bd",
    measurementId: "G-E11YF0L9CM"
  };

  export default firebase.initializeApp(firebaseConfig)