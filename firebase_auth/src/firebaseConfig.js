// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF91pZ_r9BoJM60Eljq50ul169Ec2oBVg",
  authDomain: "crypto-wallet-react.firebaseapp.com",
  projectId: "crypto-wallet-react",
  storageBucket: "crypto-wallet-react.appspot.com",
  messagingSenderId: "746495757666",
  appId: "1:746495757666:web:05938a10424dcf476d703b",
  measurementId: "G-2DPFVNY6CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;