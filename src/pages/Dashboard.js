import React, {useEffect, useState} from "react";
import {SignOut} from "../components/SignOut";
import {UserAuth} from "../context/AuthContext";
import {db} from "../config/Firebase_config";
import {doc, getDoc} from 'firebase/firestore'
export const Dashboard =  () => {
    const {user} = UserAuth();

    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                    const data = user.uid;
                    const docRef = doc(db, 'users_information', data)
                    const docSnap = await getDoc(docRef);
                    const userInformation = docSnap.data();
                    setUsername(userInformation)
            } catch (e) {
                setError(e.message)
                setTimeout(() => {
                    setError('')
                }, 2000)
            }
        }
        fetchInfo();
    }, [user]);




    return <div className='container'>
        <h1>Account</h1>
        <h2>{error}</h2>
        <p>User Email: {user && user.email}</p>
        <p>User Name: {username.username}</p>

        <SignOut />
    </div>
}