import React, {useState, useEffect} from 'react';
import {collection, query, onSnapshot} from 'firebase/firestore'
import {db} from "../../config/Firebase_config";
import {Link} from "react-router-dom";

export const GetTaskList = () => {
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const q = query(collection(db, 'tasks'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
        date: doc.data().createdAt.toDate().toDateString(),
        time: doc.data().createdAt.toDate().toLocaleTimeString()
      })))
    })
  },[])
  return (<div className='container'>
    <Link to='/tasks/add'> <button className="btn btn-primary">Add task +</button></Link>

      <table className="table text-capitalize">
        <thead>
        <tr>
          <th scope='col'>title</th>
          <th scope='col'>description</th>
          <th scope='col'>create Time</th>
          <th scope='col'>created by</th>
        </tr>
        </thead>
          <tbody>
      {tasks.map((task) => (
          <tr key={task.id}>
            <th scope='row'>{task.data.title}</th>
            <th>{task.data.description}</th>
            <th>{task.date} {task.time}</th>
            <th>{task.data.creator}</th>

          </tr>
      ))}
          </tbody>
    </table>
      </div>
  );
}
