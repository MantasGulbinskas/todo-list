
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const signUp = async (e) => {
        e.preventDefault()
        try {
         await createUser(email,password, username)
            navigate('/dashboard')
        } catch (e) {
            setError(e.message)
        }
    };
    return (
        <section>
            <div className="container mt-5 m w-25">
                <h1>{error}</h1>

                <div className="col justify-content-center">
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                            <input type="text" placeholder='username' className='form-control' value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                </div>
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
                        <button onClick={signUp} className="btn btn-primary btn-lg">Register</button>
                    </div>
                    <div>
                        <p>Already have account? <a href="/log-in">Log in</a></p>
                    </div>
                </div>
            </div>
            <div><h2><Link to='/'>Home</Link></h2></div>
        </section>
    )
}