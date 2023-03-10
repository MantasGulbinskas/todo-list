import React, {useState} from "react";
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {UserAuth} from "../context/AuthContext";


export const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {signIn, user} = UserAuth();

    const logIn = async () => {
        try {
            await signIn(email, password)
            navigate('/dashboard')
        } catch (e) {
            setError(e.code)
        }
    }
    const handleKey = (e) => {
        if(e.key === "Enter") {
            logIn();
        }
    }


    if (!user) {
        return (
            <section style={{maxWidth: '400px'}} className='text-center p-5 m-auto w-100'>
                <p>{error}</p>
                <h1>Please sign in</h1>
                <div className="form-floating">
                    <input type="email" className='form-control' id='floatingInput' placeholder='name@example.com'
                           value={email} onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput" className='fs-4'>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className='form-control' id='floatingPassword' placeholder='Password'
                           value={password}
                           onKeyDown={handleKey}
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword" className='fs-4'>Password</label>
                </div>
                <button onClick={logIn} className="w-100 btn btn-lg btn-primary my-5" type='submit'>Sign in
                </button>

                <p>Dont have account?<Link to='/sign-up'>Register</Link></p>
            </section>
        )
    }else if (user) {
        return <Navigate to={{ pathname: '/dashboard'}} replace />
    }

}


