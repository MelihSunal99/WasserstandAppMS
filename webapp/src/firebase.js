import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCKFUtL5SISgQ9_eyyTKV56xJlnt6q2Raw",
    authDomain: "wasserstandapp-75517.firebaseapp.com",
    projectId: "wasserstandapp-75517",
    storageBucket: "wasserstandapp-75517.appspot.com",
    messagingSenderId: "776705718185",
    appId: "1:776705718185:web:d2771ed2d001ec6d6df6b8"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();