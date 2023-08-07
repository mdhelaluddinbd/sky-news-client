import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from "../../firebase/firebase.config";

export const authContext = createContext();
const auth=getAuth(app);
const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  
  const providerLogin=(provider)=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

  const updateUserProfile=(profile)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,profile)
  }

  const verifyEmailAddress=()=>{
    return sendEmailVerification(auth.currentUser)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
     if(currentUser===null || currentUser.emailVerified){
      setUser(currentUser)
      setLoading(false)
     }
      
    });

    return()=>{
      unSubscribe();
    }

  },[])

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

 
  const authInfo = { user ,loading,setLoading,updateUserProfile,verifyEmailAddress,providerLogin,createUser,signUser,logOut};

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
