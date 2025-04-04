//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiGSKV3Cx_W911_emxY86Cjvpn1c0apcw",
  authDomain: "data-saver-5228b.firebaseapp.com",
  databaseURL: "https://data-saver-5228b-default-rtdb.firebaseio.com",
  projectId: "data-saver-5228b",
  storageBucket: "data-saver-5228b.firebasestorage.app",
  messagingSenderId: "835193867121",
  appId: "1:835193867121:web:35daa338bc1f27ad6c44d0",
  measurementId: "G-VNXHCEYF92"
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
