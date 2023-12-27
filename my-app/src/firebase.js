import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBUNqE4yfZab-RlXEVCFt5axv951QKk4u4",
  authDomain: "fir-auth-18.firebaseapp.com",
  projectId: "fir-auth-18",
  storageBucket: "fir-auth-18.appspot.com",
  messagingSenderId: "448658482763",
  appId: "1:448658482763:web:962b6014aa395386114fce",
  measurementId: "G-EMJKKS22N1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
// export default firebase

