import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    // User Create with Email-Password
    const signUp = async(email, password, name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
       await createUserWithEmailAndPassword(auth, email, password);
       await updateProfile(auth.currentUser, profile)
          
    }


    // Login with Email-Password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Google signUp-signIn
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // log out
    const logOut = () => {
        return signOut(auth);
    }


    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe();
    },[])

    const authInfo = {
        user,
        setUser,
        signUp,
        logIn,
        googleSignIn,
        logOut,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;