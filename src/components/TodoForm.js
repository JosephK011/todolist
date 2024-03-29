import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const[value, setValue] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(value){
      addTodo(value)
      setValue("")
    }
    
  }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Task' />
    <button type="submit" className='btn'>Add Task</button>
    </form>
  )
}
