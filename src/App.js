import React, { useState , useEffect } from 'react'
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import './sass/fonts.css'
import './sass/style.css'

const App = () => {
  const [todo, Settodo] = useState("")
  const [todos,Settodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [status, Setstatus] = useState("all")
  const [isEdit, SetisEdit] = useState(true)
  const [newData, SetnewData] = useState(null)
  const [FilterTodos, setFilterTodos] = useState([])

  useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  useEffect(() => {
    filterHandler()
    
  }, [todos,status])
  

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo)=> todo.completed===true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo)=> todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }



  const handleSubmit = (e)=> {
    e.preventDefault();
    if (!todo) {
      toast.error("Todo bosh buraxila bilmez")
    } else if (todo && !isEdit) {
        Settodos(todos.map((elem) => {
          if (elem.id === newData ) {
              return {
                ...elem, 
                todo: todo
              }
            }
            return elem;
        }))
        Settodo('')
        SetisEdit(true)
        SetnewData(null)
        toast.success("Todo update olundu")
    } 
    
    else {
    Settodo("")
    Settodos([...todos, {id: Math.random(), todo: todo, completed: false} ])
    toast.success("Todo Elave olundu")
    }
  }

  const handleDelete =(id)=> {
    Settodos(todos.filter((todo) => todo.id !== id))
    toast.success("Todo Silindi..")
  }

  const updateStatus = (id) => {
    Settodos(todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo;
    }))
  } 

  const updateTodo = (id) => {
  let newTodo = todos.find((todo) => {
    return todo.id === id;
  }); 
  
    SetisEdit(false)
    Settodo(newTodo.todo)
    SetnewData(id)
  }
  
  return (
   <div className='todo-container'>
  <ToastContainer/>
    <h1>My Todo List </h1>
  <Form 
  todo={todo} 
  Settodo={Settodo} 
  todos={todos}
  handleSubmit={handleSubmit}
  isEdit={isEdit}
  Setstatus={Setstatus}
  />
  <TodoList 
  todos={todos} 
  handleDelete={handleDelete} 
  updateStatus={updateStatus}
  updateTodo={updateTodo}
  FilterTodos={FilterTodos}
  />
   </div>
  )
}

export default App