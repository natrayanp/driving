import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';
import { signOut } from 'firebase/auth';
import { goto } from '$app/navigation';
import { session } from '$lib/authstore';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	type UserCredential
} from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth/web-extension';

export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	useEmulator: import.meta.env.VITE_FIREBASE_USE_EMULATOR === 'true',
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
};

export const initializeFirebase = () => {
	if (!browser) {
		throw new Error("Can't use the Firebase client on the server.");
	}
	if (!app) {
		app = initializeApp(firebaseConfig);
		auth = getAuth(app);

		if (firebaseConfig.useEmulator) {
			connectAuthEmulator(auth, 'http://127.0.0.1:9099');
		}
	}
};


export const logout = async () => {
	signOut(auth)
	.then(() => {
		goto('/');		
	})
	.catch((error) => {
		throw new Error(error);
	});
}
	

export async function loginWithMail(email: string, password: string ) {
	
	
	await signInWithEmailAndPassword(auth, email, password)
		.then((result) => {
			const { user }: UserCredential = result;
			session.set({
				loggedIn: true,
				user: {
					displayName: user?.displayName,
					email: user?.email,
					photoURL: user?.photoURL,
					uid: user?.uid
				}
			});
			goto('/dashboard');
		})
		.catch((error) => {
			return error;
		});
}

export async function loginWithprovider(provid:string) {	
	let provider = new GoogleAuthProvider();

	if(provid != 'Google'){
		switch(provid){
			case('Facebook'):
				provider = new FacebookAuthProvider();
		}
	}
	await signInWithPopup(auth, provider)
		.then((result) => {
			const { displayName, email, photoURL, uid } = result?.user;
			session.set({
				loggedIn: true,
				user: {
					displayName,
					email,
					photoURL,
					uid
				}
			});

			goto('/dashboard');
		})
		.catch((error) => {
			return error;
		});
}