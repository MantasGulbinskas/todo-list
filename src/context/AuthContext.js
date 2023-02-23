import {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from "firebase/auth";
import {setDoc, doc } from 'firebase/firestore'
import {auth, db} from "../config/Firebase_config";

const UserContext = createContext(() => {})

export const AuthContextProvider = ({children}) => {

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
        })
        return() => {
            unsubscribe()
        }
    },[])


    const [user, setUser] = useState({})
    const createUser = (email,password, username) => {
        return createUserWithEmailAndPassword(auth,email,password)
            .then(async (result) => {
                const ref = doc(db, 'users_information', result.user.uid);
                 await setDoc(ref, { username})
            })
    }
    const logout = () => {
        return signOut(auth)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}