import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(
			FirebaseAuth,
			// googleProvider,
			googleProvider.setCustomParameters({
				//seleccionar siempre una cuenta
				prompt: 'select_account',
			})
		);

		// const credentials = GoogleAuthProvider.credentialFromResult(result);
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			//user info
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
	try {
		const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

		const { uid, photoURL } = resp.user;

		// actualizar el displayName en Firebase
		await updateProfile(FirebaseAuth.currentUser, { displayName });

		return {
			ok: true,
			uid,
			photoURL,
			email,
			displayName,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const loginWithEmailPassword = async ({ email, password }) => {
	try {
		// signInWithEmailAndPassword
		const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

		const { displayName, photoURL, uid } = resp.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
