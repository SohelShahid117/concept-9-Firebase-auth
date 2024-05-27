import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
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

  const AuthInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
