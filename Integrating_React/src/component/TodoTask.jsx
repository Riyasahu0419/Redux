import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"

function TodoTask() {
  const [todo,SetTodo]=useState("")
  const dispatch = useDispatch()
  const tasks= useSelector(state=>state.tasks.tasks)
  
  const handleClick=()=>{
    if(todo.trim()==="") return
    dispatch({type:"ADD_TASK", payload:todo})
    SetTodo("")
  }


  const handleToggle=(id)=>{
    dispatch({type:"TOGGLE_TASK",payload:id})
  }

  const handleDelete=(id)=>{
    dispatch({type:"DELETE_TASK",payload:id})
  }


  return (
    <>
    <h1>Todo List</h1>
    <input type="text" value={todo} onChange={(e)=>(SetTodo(e.target.value))} placeholder='write the task'/>
    <button onClick={handleClick} >Add task</button>
    <ul>
      {tasks.map((task)=>{
        return(
          <li key={task.id} style={{textDecoration : task.completed ? "line-through":"none"}}>
          Title:{task.text}
          <br />

         <button onClick={()=>{handleToggle(task.id)}}>{task.completed ? "undo":"completed"}</button>
          <button onClick={()=>{handleDelete(task.id)}}>Delete</button>
        </li>
        )
        
      }
      )}
    </ul>
    </>
  )
}

export default TodoTask