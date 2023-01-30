import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCLeYMOOMK7A7YrFrfM6Yy0Vbs_LDaypko",
    authDomain: "knocknoc-8ecab.firebaseapp.com",
    projectId: "knocknoc-8ecab",
    storageBucket: "knocknoc-8ecab.appspot.com",
    messagingSenderId: "1053792638457",
    appId: "1:1053792638457:web:36e1dacee86ccd32b99928",
    measurementId: "G-SXNQZFSRV4"
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth,app}