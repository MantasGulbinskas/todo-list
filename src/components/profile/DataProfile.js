import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../../context/AuthContext";


export const DataProfile = () => {
    const {changeProfileData, changeProfileSubmit} = UserAuth()
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
         async function func() {
            try {
                await changeProfileData()
                    .then((key) => {
                       setUsername(key.username)
                        setName(key.name)
                        setLastname(key.lastname)
                    })
            } catch (e) {
                console.error(e.message)
            }
        }

func()
    },[])
    const handleEdit = async () => {
        try {
            if (username && lastname && username) {
            await changeProfileSubmit(username,name,lastname)
            setError('Submit!')
            setTimeout(() => {
                navigate('/dashboard')
            }, 1500)
            }else {
                setError('All inputs are required!')
            }

        }catch (e) {
            console.error(e)
        }
    }

    return (
        <div className='d-flex flex-column container align-items-center'>
            <p>{error}</p>
            <div className='container d-flex justify-content-around'>
                <label htmlFor="username">Username
                    <input className='mx-2' type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <label htmlFor="name">
                    Name
                    <input className='mx-2' type="text" value={name} onChange={e => setName(e.target.value)}/>
                </label>

                <label htmlFor="lastname">
                    Lastname
                    <input className='mx-2' type="text" value={lastname} onChange={e => setLastname(e.target.value)}/>
                </label>
            </div>
            <button onClick={handleEdit} className="btn btn-primary">submit</button>
        </div>
    );
}
