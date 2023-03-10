// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  //AquÃ­ vuestra configuraciÃ³n Firebase
  apiKey: "AIzaSyDNZMHIxbFMtZGr3v0yCIB50XHBEMtkH90",

  authDomain: "proyecto-domotica-40fb5.firebaseapp.com",

  projectId: "proyecto-domotica-40fb5",

  storageBucket: "proyecto-domotica-40fb5.appspot.com",

  messagingSenderId: "121576696233",

  appId: "1:121576696233:web:abb25ab118139ef783fcb8",
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//CRUD

export const onGet = (ref, callback) =>
  onSnapshot(collection(db, ref), callback);
export const editar = (ref, id, objeto) => updateDoc(doc(db, ref, id), objeto);
