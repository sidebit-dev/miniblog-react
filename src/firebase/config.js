import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDSxIF0GrygC3Yd6IdY5OyA-UuzjsIAlrA",
  authDomain: "miniblog-4a60b.firebaseapp.com",
  projectId: "miniblog-4a60b",
  storageBucket: "miniblog-4a60b.appspot.com",
  messagingSenderId: "979625175291",
  appId: "1:979625175291:web:bdcb605464d6064882a85e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };