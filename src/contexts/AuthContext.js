import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();

	function signUP(email, password) {
		return auth.createUserWithEmailAndPassword(email,password)
	}

    function logIn(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

	function logOut(){
		return auth.signOut();
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
        logIn,
		signUP,
		logOut
	};
	return (
		<div>
			<AuthContext.Provider value={value}>
				{children}
			</AuthContext.Provider>
		</div>
	);
}
