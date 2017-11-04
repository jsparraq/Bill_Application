//Dependencias
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8n_fa4tCVOTNzgCZ9t2KCg5mpui3zbEw",
    authDomain: "mi-bill.firebaseapp.com",
    databaseURL: "https://mi-bill.firebaseio.com",
    projectId: "mi-bill",
    storageBucket: "mi-bill.appspot.com",
    messagingSenderId: "75006160598"
  };
const app = firebase.initializeApp(config);

const db = app.database();


export { app, db };
