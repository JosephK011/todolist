import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const[value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")

    
  }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update' />
    <button type="submit" className='btn'>Update Task</button>
    </form>
  )
}