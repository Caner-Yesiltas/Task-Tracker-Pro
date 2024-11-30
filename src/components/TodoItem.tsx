import React from 'react'
import { todoType } from '../apptypes'

type PropsType ={
    task:todoType
    deleteTask(nameToDelete:string):void
}



const TodoItem = ({task, deleteTask, } :PropsType ) => {
  return (
    <div className='List'>
      <p>{task.task}</p>
      <p>{task.workDay}</p>
      <button onClick={()=>deleteTask(task.task)}  >Ready </button>
    </div>
  )
}

export default TodoItem
