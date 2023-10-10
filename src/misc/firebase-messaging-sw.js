/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);
firebase.initializeApp({
  apiKey: 'AIzaSyC6YeFIoaiZow4KNqJaRMk9uwk7xaUsJZw',
  authDomain: 'chatroom-aeb2d.firebaseapp.com',
  projectId: 'chatroom-aeb2d',
  storageBucket: 'chatroom-aeb2d.appspot.com',
  messagingSenderId: '517789897938',
  appId: '1:517789897938:web:a5ad712fcaaacc74e0c90b',
});

firebase.messaging();
