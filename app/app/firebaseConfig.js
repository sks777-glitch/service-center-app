import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwwp62tVrDiUOdZiOzu1WUbebblaLZYm4",
  authDomain: "service-senter-app.firebaseapp.com",
  projectId: "service-senter-app",
  storageBucket: "service-senter-app.firebasestorage.app",
  messagingSenderId: "850080983904",
  appId: "1:850080983904:web:fed05aa488c0ea589c4c05"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
