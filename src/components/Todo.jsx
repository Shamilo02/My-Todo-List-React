import React from 'react'

const Todo = ({todo,handleDelete,updateStatus,updateTodo}) => {
 
  return (
    <li className={todo.completed ? "complected": ""} key={todo.id}>
    <span> {todo.todo} </span>
    <div className="btns">
    <i className='fas fa-xmark' onClick={() => handleDelete(todo.id)}>  </i>
    <i className='fas fa-marker' onClick={() => updateTodo(todo.id)}> </i>
    <i onClick={()=> updateStatus(todo.id)} className='fas fa-check'> </i>
    </div>
    </li>
  )
}

export default Todo