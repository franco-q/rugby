import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk0LAh0ruWglCGV48ELsn1ZpekcFbaeA0",
  authDomain: "splt-2feb2.firebaseapp.com",
  databaseURL: "https://splt-2feb2-default-rtdb.firebaseio.com",
  projectId: "splt-2feb2",
  storageBucket: "splt-2feb2.appspot.com",
  messagingSenderId: "498207691559",
  appId: "1:498207691559:web:472150739acc4f1771cf02",
  measurementId: "G-V7JCJ9YNLR",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseStore = getFirestore(FirebaseApp);
