import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from "../../firebase/firebase.config";

export const authContext = createContext();
const auth=getAuth(app);
const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  
  const providerLogin=(provider)=>{
    return signInWithPopup(auth,provider)
  }

  const logOut=()=>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser)
      setUser(currentUser)
    });

    return()=>{
      unSubscribe();
    }

  },[])

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

 
  const authInfo = { user ,providerLogin,createUser,signUser,logOut};

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
