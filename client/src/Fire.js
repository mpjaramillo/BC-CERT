import firebase from "firebase/app";
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
var config = {
  apiKey: "AIzaSyBAP2M2hJXL66UZ-WJSyNjOA4wZ1h21W8Y",
  authDomain: "bc-cert.firebaseapp.com",
  databaseURL: "https://bc-cert.firebaseio.com",
  projectId: "bc-cert",
  storageBucket: "bc-cert.appspot.com",
  messagingSenderId: "267158183238"

};
var fire = firebase.initializeApp(config);
export default fire;
