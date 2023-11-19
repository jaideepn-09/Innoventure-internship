
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_Fui0P4zb0Jxj6cZEu_xGpJ1TfhQ3U_A",
  authDomain: "form-899dc.firebaseapp.com",
  projectId: "form-899dc",
  storageBucket: "form-899dc.appspot.com",
  messagingSenderId: "944314251438",
  appId: "1:944314251438:web:7eda4f181953f2bed0153f",
  measurementId: "G-3HD6D32RNG"
};  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);