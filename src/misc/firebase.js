import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

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

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BCMcvNuoyixkb0JcfmXPATQjQ9e8_iJv654eWbUW8YR6-pJCmaVumE_iwOiaw8DEwn87YqAtZ6mZZbzEJraUDU4'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
