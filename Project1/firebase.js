
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Importér Realtime Database


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "tutormatch3520-7cf45.firebaseapp.com",
  databaseURL: "https://tutormatch3520-7cf45-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tutormatch3520-7cf45",
  storageBucket: "tutormatch3520-7cf45.appspot.com",
  messagingSenderId: "1099419957035",
  appId: "1:1099419957035:web:baa4db538e00b6f70d376e"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
