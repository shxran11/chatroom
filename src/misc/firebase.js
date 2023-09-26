import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyC6YeFIoaiZow4KNqJaRMk9uwk7xaUsJZw',
  authDomain: 'chatroom-aeb2d.firebaseapp.com',
  projectId: 'chatroom-aeb2d',
  storageBucket: 'chatroom-aeb2d.appspot.com',
  messagingSenderId: '517789897938',
  appId: '1:517789897938:web:a5ad712fcaaacc74e0c90b',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
