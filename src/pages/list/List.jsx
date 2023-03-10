import React, {useState, useEffect} from 'react';
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    where
} from "firebase/firestore";
import { db } from "../../config/Firebase_config";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Todo from "../../components/tasks/Todo";
import AddTodo from "../../components/tasks/AddTodo";
import {useLocalStorage} from "../../hooks/UseLocalStorage";

export const List = () => {
    const [dataStorage] = useLocalStorage()
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "tasks"), where("creator_id", "==", dataStorage.uid));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArray);
        });
        return () => unsub();
    }, []);

    // const handleEdit = async (todo, title) => {
    //     await updateDoc(doc(db, "tasks", todo.id), { title: title });
    // };
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "tasks", todo.id), { completed: !todo.completed });
    };
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
    };
  return (
      <div className="d-flex w-100">
          <Sidebar/>
          <div style={{flex: 12}}>
              <Navbar/>
              <div className='mt-5 d-flex flex-column align-items-center'>
                  <h1 className='text-center'>Todo Tasks</h1>
                  <AddTodo />
              </div>
              <div className="container">
                  {todos.map((todo) => (
                      <Todo
                          key={todo.id}
                          todo={todo}
                          toggleComplete={toggleComplete}
                          handleDelete={handleDelete}
                          // handleEdit={handleEdit}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
}
