import React from 'react';
import {GetTaskList} from "../components/tasks/GetTaskList";

export const Tasks = () => {
  return (
    <div className='container'>
      <h1>Tasks</h1>

      <GetTaskList />
    </div>
  );
}
