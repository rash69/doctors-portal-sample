import React, { useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState, createContext } from "react";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const getUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    name: displayName,
    email: email,
    photo: photoURL,
  };
};

const Auth = () => {
  const [user, setUser] = useState(null);

  const SignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const singedInUser = getUser(res.user);
        setUser(singedInUser);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };
  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(null);
        return true;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currentUser = getUser(user);
        setUser(currentUser);
      } else {
      }
    });
  }, []);
  return {
    getUser,
    user,
    SignIn,
    signOut,
  };
};

export default Auth;
