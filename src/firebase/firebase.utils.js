import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC2RMMN_grPBnFFXhjpOhEe8r1wnou7aTM',
	authDomain: 'ndp-clothing.firebaseapp.com',
	databaseURL: 'https://ndp-clothing.firebaseio.com',
	projectId: 'ndp-clothing',
	storageBucket: 'ndp-clothing.appspot.com',
	messagingSenderId: '1022909907482',
	appId: '1:1022909907482:web:bb46dbc7e796a3aec207a3',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
