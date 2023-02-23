import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
            <div className='container me-4'>
                <Link className='me-4' to='/sign-up'>Sign up</Link>
                <Link to='/log-in'>Log in</Link>
            </div>
    )
}