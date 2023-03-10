import React, {useState} from "react";
import {db} from "../../config/Firebase_config";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {useLocalStorage} from "../../hooks/UseLocalStorage";

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const [dataStorage]  = useLocalStorage('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "tasks"), {
                title,
                date: Timestamp.now().toDate(),
                completed: false,
                creator_id: dataStorage.uid
            });
            setTitle("");
        }
    };
    return (
        <form className='shadow rounded my-auto p-3 d-flex flex-column align-items-center' onSubmit={handleSubmit}>
            <div className="mb-4">
                <input className='fs-4'
                    type="text"
                    placeholder="Enter todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button className='btn btn-dark '>Add</button>
</form>
)
}