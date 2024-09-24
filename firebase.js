import firebase from 'firebase/app';
import 'firebase/firestore'; // Henter Firestore modulet

// Din Firebase-konfiguration. Erstat nedenstående med dine Firebase-oplysninger.
const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DIN_AUTH_DOMAIN",
  projectId: "DIT_PROJECT_ID",
  storageBucket: "DIT_STORAGE_BUCKET",
  messagingSenderId: "DIT_MESSAGING_SENDER_ID",
  appId: "DIN_APP_ID",
};

// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };



// næste opgave bliver at sætte firebase op