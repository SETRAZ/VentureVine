import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "apikey",
  authDomain: "venturevine-624ef.firebaseapp.com",
  projectId: "venturevine-624ef",
  storageBucket: "venturevine-624ef.appspot.com",
  messagingSenderId: "messageid",
  appId: "appid",
  measurementId: "m-id"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
