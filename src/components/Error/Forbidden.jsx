import React from 'react';
import './styles/Forbidden.css'
import {Link} from "react-router-dom";

export const Forbidden = () => {

    return (
        <section className='background'>
            <div className='text container'>
                <h1 className='text-danger'>Sorry folks, page is forbidden.</h1>
                <p>The moose out front shoulda told ya.</p>
                <p>You must go to <Link to='/sign-up'>Sign Up</Link> Or <Link to='/log-in'>Sign in</Link></p>
            </div>
        </section>
    );
}
