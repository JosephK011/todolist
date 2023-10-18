import React, {useState, forwardRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className='Todo' >
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.task}
      </p>
      <p>
          <DatePicker
            selected={startDate} className='calendar'
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
