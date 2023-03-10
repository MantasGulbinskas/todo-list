import {createContext, useContext, useEffect, useState} from "react";
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    setPersistence,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore'
import {auth, db} from "../config/Firebase_config";
import {useLocalStorage} from "../hooks/UseLocalStorage";

const UserContext = createContext(() => {
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
const [dataStorage] = useLocalStorage()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setPersistence(auth, browserLocalPersistence)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const createUser = (email, password, username, name, lastname) => {
        return createUserWithEmailAndPassword(auth, email, password,)
            .then(async (result) => {
                const ref = doc(db, 'users_information', result.user.uid);
                await setDoc(ref, {
                    username,
                    name,
                    lastname,
                    isAdmin: false
                })
            })
    }
    const logout = () => {
        return signOut(auth)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const changeProfileData = async () => {
        try {
            const docRef = doc(db, "users_information", dataStorage.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const changeProfileSubmit = async (username, name, lastname) => {
        try {
            const userRef = doc(db, 'users_information', user.uid)
            await updateDoc(userRef, {
                username: username,
                name: name,
                lastname: lastname,
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn, changeProfileData, changeProfileSubmit}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}