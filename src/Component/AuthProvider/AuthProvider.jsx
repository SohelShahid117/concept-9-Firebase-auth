import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../../Firebase/Firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //   console.log(children);
  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   console.log(result.user);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   console.log(result.user);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const fbProvider = new FacebookAuthProvider();
  const fbLogin = () => {
    return signInWithPopup(auth, fbProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const AuthInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    fbLogin,
    logOut,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
      } else {
        // console.log("logged out");
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
