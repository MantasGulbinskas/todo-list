import React, {useReducer} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

function registerReducer(state, action) {
    if (action.type === "input") {
        return {
            ...state,
            [action.name]: action.value
        };
    } else if (action.type === "submit") {
        return {
            ...state,
            error: null,
            loading: true
        };
    } else if (action.type === "success") {
        return {
            ...state,
            registered: true,
            loading: false,
            error: null
        };
    } else if (action.type === "error") {
        return {
            ...state,
            loading: false,
            error: action.error
        };
    }
}

const initialReducerValue = {
    loading: false,
    error: null,
    name: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    registered: false
};

export const SignUp = () => {

    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const [state, dispatch] = useReducer(registerReducer, initialReducerValue);
    const validateInputs = (inputs) => {

        for (const inputName of Object.values(inputs)) {
            const inputValue = inputs[inputName]
            if (inputValue === '') {
                dispatch({type: 'error', error: `${inputName} is required`})
                return false
            }
        }
        return true;
    }
    const areInputsFilled = validateInputs(state)
    const signUp = async (e) => {
        e.preventDefault()
        try {
            if (areInputsFilled) {
                await createUser(
                    state.email,
                    state.password,
                    state.username,
                    state.name,
                    state.lastname
                )
                    .then(() => dispatch({type: 'success'}))
                navigate('/dashboard')

            }
        } catch (error) {
            dispatch({type: 'error', error: error.code});
        }
    };


    return (
        <section style={{maxWidth: '400px'}} className='text-center p-5 m-auto w-100'>
            <h1>Register</h1>
            <p>{state.error && state.error}</p>
            <div className="form-floating">
                <input type="email" name='email' required className='form-control' id='email'
                       placeholder='name@example.com'
                       value={state.email} onChange={e =>
                    dispatch({
                        type: 'input',
                        name: e.target.name,
                        value: e.target.value
                    })}/>
                <label htmlFor="email" className='fs-4'>Email address</label>
                {state.email === '' && <span className="text-danger">Email is required</span>}
            </div>
            <div className="form-floating">
                <input type="text" name='username' className='form-control' id='username' value={state.username}
                       onChange={e =>
                           dispatch({
                               type: 'input',
                               name: e.target.name,
                               value: e.target.value
                           })}/>
                <label htmlFor="username" className='fs-4'>Username</label>
                {state.username === '' && <span className="text-danger">username is required</span>}
            </div>
            <div className="form-floating">
                <input type="text" className='form-control' name='name' id='name' placeholder='name@example.com'
                       value={state.name} onChange={e =>
                    dispatch({
                        type: 'input',
                        name: e.target.name,
                        value: e.target.value
                    })}/>
                <label htmlFor="name" className='fs-4'>Name</label>
                {state.name === '' && <span className="text-danger">Name is required</span>}
            </div>
            <div className="form-floating">
                <input type="text" className='form-control' name='lastname' id='lastname' placeholder='name@example.com'
                       value={state.lastname} onChange={e =>
                    dispatch({
                        type: 'input',
                        name: e.target.name,
                        value: e.target.value
                    })}/>
                <label htmlFor="lastname" className='fs-4'>Last Name</label>
                {state.lastname === '' && <span className="text-danger">Last name is required</span>}
            </div>
            <div className="form-floating">
                <input type="password" name='password' className='form-control' id='floatingPassword'
                       placeholder='Password' value={state.password} onChange={e =>
                    dispatch({
                        type: 'input',
                        name: e.target.name,
                        value: e.target.value
                    })}/>
                <label htmlFor="floatingPassword" className='fs-4'>Password</label>
                {state.password === '' && <span className="text-danger">Password is required</span>}

            </div>
            <button onClick={signUp} className="w-100 btn btn-lg btn-primary my-5" type='submit'>Sign up</button>
            <p>Already have account? <Link to='/log-in'>Log in</Link></p>

        </section>
    )
}