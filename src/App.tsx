import { useState, ChangeEvent } from 'react';
import { todoType } from './apptypes';
import './styles/App.css';
import TodoItem from './components/TodoItem';

const App = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([])


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
   
  };
 
  const deleteTask = (nametoDelete:string):void =>{
    setTodoList(todoList.filter((task)=> {
      return task.task !== nametoDelete;

    }))

  }

  const addNewTask = () : void  => {
    const newTask = {
      task:task, 
      workDay:workDay
  }
  setTodoList([...todoList, newTask]);
  setTask('');
  setWorkDay(0);
  console.log(task, workDay);
};

  return (
    <div className='App'>
         <h1>Task Tracker Pro</h1>
      <div className="maincard" > 
     
      <input
        type='text'
        value={task}
        name='task'
        placeholder='Ready to make things happen?'
        onChange={handleChange}
      />
      <input
        type='number'
        value={workDay}
        name='workDay'
        placeholder='Set your deadline, crush your goals!'
        onChange={handleChange}
      />
      <button onClick={addNewTask} >Launch Task</button>
      </div>
      <div>
        {todoList.map((task: todoType , index: number) =>{
          return <TodoItem  key={index} task={task} deleteTask={deleteTask} />

        })}
      </div>
    </div>
    
  );
};

export default App;
