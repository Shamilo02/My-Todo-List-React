import React from 'react'

const Form = ({todo,Settodo, handleSubmit,isEdit, Setstatus}) => {

  return (
    <form onSubmit={handleSubmit}>
    <div className="add-form">
    <input type="text" value={todo} onChange={(e)=> Settodo(e.target.value)} />
    <button type='submit'> {isEdit ? "Add Todo" : "Update"} </button>
    
    </div>
   <select onChange={(e) => Setstatus(e.target.value)}> 
    <option value="all">All </option>
    <option value="completed">Compeleted </option>
    <option value="uncompleted">Uncompleted </option>
    </select>
    </form>
  )
}

export default Form