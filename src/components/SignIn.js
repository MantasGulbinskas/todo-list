import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from "../context/AuthContext";

export const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {signIn} = UserAuth();
    const navigate = useNavigate()


    const logIn = async () => {
        try {
            await signIn(email, password)
            navigate('/dashboard')
        } catch (e) {
            setError(e.message)
        }
    }
    return (
        <section>
            <h1>{error}</h1>
            <div className="container mt-5 m w-25">
                <div className="col justify-content-center">
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                            <input type="text" placeholder='Email' className='form-control' value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                            <input type="password" placeholder='password' className='form-control' value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 -mb-3 mb-lg-4">
                        <button onClick={logIn} className="btn btn-primary btn-lg">Log in</button>
                    </div>
                    <div>
                        <p>Not register? <a href="/sign-up">Sign up</a></p>
                    </div>
                </div>
            </div>
            <div><h2><Link to='/'>Home</Link></h2></div>
        </section>
    )
}


