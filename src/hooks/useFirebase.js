import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/FIrebase/FirebaseInit';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getIdToken,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");



    // create account with email
    const handleCreateAccountWithEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(user)
                setError('');
                // // save user to the database
                // saveUser(email, name, 'POST');

                // send name to firebase after creation
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(result => {
                    })
                    .catch((error) => {
                    });
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, []);

    // login with email
    const handleLoginWithEmail = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    // log out
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                setError(error.message)
            })
    }


    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };

    //     fetch('http://localhost:5000/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    // }


    return {
        user,
        admin,
        error,
        loading,
        handleCreateAccountWithEmail,
        handleLoginWithEmail,
        handleLogOut,
    }
};

export default useFirebase;