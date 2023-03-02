// import React, {useEffect, useState} from "react";
// import {UserAuth} from "../context/AuthContext";
// import {db} from "../config/Firebase_config";
// import {doc, getDoc} from 'firebase/firestore'
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import './dashboard.scss'

export const Dashboard = () => {
    // const {user} = UserAuth();
    //
    // const [username, setUsername] = useState('')
    // const [error, setError] = useState('')

    // useEffect(() => {
    //     const fetchInfo = async () => {
    //         try {
    //             const data = user.uid;
    //             const docRef = doc(db, 'users_information', data)
    //             const docSnap = await getDoc(docRef);
    //             const userInformation = docSnap.data();
    //             setUsername(userInformation)
    //         } catch (e) {
    //             setError(e.message)
    //             setTimeout(() => {
    //                 setError('')
    //             }, 2000)
    //         }
    //     }
    //     fetchInfo();
    // }, [user]);
    //

    return (
        <div className="home ">
                <Sidebar/>
            <div className="homeContainer ">
            <Navbar/>
            </div>
        </div>
    )
}