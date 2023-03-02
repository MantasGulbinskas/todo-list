import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({todo, toggleComplete, handleDelete, handleEdit,}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true) {
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    };
    return (
        <div className="d-flex shadow bg-white rounded-2 p-2 mt-4 justify-content-between align-items-center">
            <input
                style={{textDecoration: todo.completed && "line-through"}}
                type="text"
                value={todo.title === "" ? newTitle : todo.title}
                className=" border-0 bg-transparent fs-2"
                onChange={handleChange}
            />
            <div>
                <button
                    className="bg-transparent border-0 text-success"
                    onClick={() => toggleComplete(todo)}
                >
                    <CheckCircleIcon className='fs-2'/>
                </button>
                <button
                    className="bg-transparent border-0 text-primary"
                    onClick={() => handleEdit(todo, newTitle)}
                >
                    <EditIcon className='fs-2'/>
                </button>
                <button className="bg-transparent border-0 text-danger" onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon className='fs-2'/>
                </button>
            </div>
        </div>
    );
}