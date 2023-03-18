import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const User_Context = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const User_Context_Provider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [currentUser]);

  return (
    <User_Context.Provider value={value}>{children}</User_Context.Provider>
  );
};
