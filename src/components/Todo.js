
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export const Todo = ({task, toggleComplete, deleteTodo}) => {

  
  return (
    <div className='Todo' >
      <p onClick={() => toggleComplete(task._id, task.completed)} className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.todo}
      </p>
      <div>
        <FontAwesomeIcon icon={task.completed ? faSquareCheck : faSquare} onClick={() => toggleComplete(task._id, task.completed)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task._id)}/>
      </div>
    </div>
  )
}
