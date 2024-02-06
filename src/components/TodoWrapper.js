import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
uuidv4()


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setTodos(todos);
    }
    getTodos();
  },[todos])

  const addTodo = async (content) => {
    if(content){
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ todo: content }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const newToDo = await res.json();
      setTodos([...todos, newToDo]);
    }
  }

  const toggleComplete = async (todoId, todoStatus) =>{
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ completed: todoStatus } ),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = res.json();
    if(json.acknowledged){
      setTodos(todos.map(todo => todo.id === todoId ? {...todo, 
      completed: !todo.completed} : todo))
    }
    
  }

  const deleteTodo = async (todoId) =>{
    const res = await fetch(`/api/todos/${todoId}`,{
      method: "DELETE",
    });
    const json = res.json();
    if(json.acknowledged){
      setTodos(todos.filter(todo => todo.id !== todoId))
    }

    
  }


  return (
    <div className='TodoWrapper'>
      <h1 className='Title'>What to do?</h1>
        <TodoForm addTodo={addTodo}/>
        {(todos.length > 0) && todos.map((todo) => (
          (
            <Todo task={todo} key={todo._id} toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}/>
          )
        ))}

    </div>
  )
}
