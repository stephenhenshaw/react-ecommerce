import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCUmPH6PxXYoksxhUPH1UoXdS_HOaMDFJA",
	authDomain: "crwn-db-435e5.firebaseapp.com",
	projectId: "crwn-db-435e5",
	storageBucket: "crwn-db-435e5.appspot.com",
	messagingSenderId: "1056200393188",
	appId: "1:1056200393188:web:f4e7cd00cf323b5af047f1",
	measurementId: "G-21GGHKB7BF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google Authentication Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export default firebase;
