import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signUP(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function updatePassword(password){
    return currentUser.updatePassword(password);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function logOut() {
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
    logOut,
    resetPassword,
    updatePassword
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
}
