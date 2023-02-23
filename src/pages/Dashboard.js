import React from "react";
import {SignOut} from "../components/SignOut";
import {UserAuth} from "../context/AuthContext";

export const Dashboard = () => {

    const {user} = UserAuth();

    return <div className='container'>
        <h1>Account</h1>
        <p>User Email: {user && user.email}</p>
    <SignOut />
    </div>
}