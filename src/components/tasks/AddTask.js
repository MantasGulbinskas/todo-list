import React, {useState} from 'react';
import {addDoc, collection, doc, getDoc, Timestamp} from 'firebase/firestore'
import {db} from "../../config/Firebase_config";
import {useNavigate} from "react-router-dom";
import {UserAuth} from '../../context/AuthContext'

export const AddTask = () => {
    const {user} = UserAuth()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        if (event.target.value) {
            setMessage("");
        }
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        if (event.target.value) {
            setMessage("");
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        if (title.trim() === "" || description.trim() === "") {
            setMessage("Both title and description are required.");
            return;
        }

        try {
            const ref = doc(db, 'users_information', user.uid)
            const docSnap = await getDoc(ref)
            const users = docSnap.data().username;
            const newTask = {
                title: title,
                description: description,
                createdAt: Timestamp.now(),
                creator: users
            };
            await addDoc(collection(db, "tasks"), newTask);
            setMessage('Data added successfully!')
            setTimeout(() => {
                navigate('/tasks')
            }, 1200)
        } catch (err) {
            console.log(err);
        }

        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange}/>
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={handleDescriptionChange}/>
            </label>
            {message && <p>{message}</p>}
            <button type="submit">Add Task</button>
        </form>
    )
}
