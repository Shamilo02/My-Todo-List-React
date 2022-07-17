import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,handleDelete,updateStatus,updateTodo,FilterTodos}) => {
  if(todos.length === 0){
    return (
      <h2>
        Hal hazırda todo əlavə olunmayıb..
        </h2>
    )
  }
  return (
    <ul>
    {FilterTodos.map((todo) => {
      return (
       <Todo 
       key={todo.id} 
       todo={todo} 
       handleDelete={handleDelete}
       updateStatus={updateStatus}
       updateTodo={updateTodo}
      
       />
        )
       })
     }
   </ul>
  )
}

export default TodoList