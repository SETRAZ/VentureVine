import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxFpBSosfVK3NeHp-GjGgiScxBjXDyGoo",
  authDomain: "venturevine-624ef.firebaseapp.com",
  projectId: "venturevine-624ef",
  storageBucket: "venturevine-624ef.appspot.com",
  messagingSenderId: "967756362000",
  appId: "1:967756362000:web:ac4a32c2a6006aa9cbf595",
  measurementId: "G-YZQ3CL01JL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);