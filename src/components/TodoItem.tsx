import React from 'react'
import { todoType } from '../apptypes'

type PropsType ={
    task:todoType
    deleteTask(nameToDelete:string):void
}



const TodoItem = ({task, deleteTask} :PropsType ) => {
  return (
    <div>
      <p>{task.task}</p>
      <p>{task.workDay}</p>
      <button onClick={()=>deleteTask(task.task)}  >Do it! </button>
    </div>
  )
}

export default TodoItem
