import { initializeApp } from "firebase/app";

// Import
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCONV-pyapfWAL74RWEcHOU2bOUHZttqX0",
  authDomain: "digiworld-563b1.firebaseapp.com",
  projectId: "digiworld-563b1",
  storageBucket: "digiworld-563b1.appspot.com",
  messagingSenderId: "438783901520",
  appId: "1:438783901520:web:582198fe8803192e857655",
  measurementId: "G-KNE1GMJK9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
