import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore/lite";

console.log(process.env)

const app = firebase.initializeApp(
	    {
	    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	    appId: process.env.REACT_APP_FIREBASE_APP_ID

	}
	// {
	// 	apiKey: "AIzaSyDdceJUiBGX-bdfzefZB-5KwcZbhdvgGbA",
	// 	authDomain: "forev21-6a624.firebaseapp.com",
	// 	projectId: "forev21-6a624",
	// 	storageBucket: "forev21-6a624.appspot.com",
	// 	messagingSenderId: "226995886516",
	// 	appId: "1:226995886516:web:25f9b65904c812b3173ae1",
	// }
);
export const auth = app.auth();
export const db = getFirestore(app);
export default app;
