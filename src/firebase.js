// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVz7a_eLm7Pv7ZvnDbBfD8svwN2UYCEcs",
    authDomain: "netflix-clone-9c6bf.firebaseapp.com",
    projectId: "netflix-clone-9c6bf",
    storageBucket: "netflix-clone-9c6bf.appspot.com",
    messagingSenderId: "249179368831",
    appId: "1:249179368831:web:9b1357d4e9a2e5e865be4a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;