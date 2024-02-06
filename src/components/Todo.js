import React, {useState, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const Todo = ({task, toggleComplete, deleteTodo}) => {

  
  return (
    <div className='Todo' >
      <p onClick={() => toggleComplete(task._id, task.completed)} className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.todo}
      </p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task._id)}/>
      </div>
    </div>
  )
}
