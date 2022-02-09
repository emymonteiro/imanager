import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwn9WtdHt6K18n8UcKw4BGCaUuCV0Rkq4",
  authDomain: "vuejsauth-c11b9.firebaseapp.com",
  projectId: "vuejsauth-c11b9",
  storageBucket: "vuejsauth-c11b9.appspot.com",
  messagingSenderId: "772417695581",
  appId: "1:772417695581:web:e91194f15f91164e6182b4",
  measurementId: "G-JLSQ9F2PL7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }