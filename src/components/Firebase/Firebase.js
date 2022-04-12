import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyC_2aUez9nQ5EuzQpTD7rAkKeHdmNJj5Ww',
	authDomain: 'fb-messenger-5c8ce.firebaseapp.com',
	projectId: 'fb-messenger-5c8ce',
	storageBucket: 'fb-messenger-5c8ce.appspot.com',
	messagingSenderId: '237355731379',
	appId: '1:237355731379:web:4104bd8b7f5c73826723c6',
	measurementId: 'G-B7D7XQN9S9',
});

const db = firebaseApp.firestore();

export default db;
