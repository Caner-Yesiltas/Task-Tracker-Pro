import { useState, ChangeEvent } from 'react';
import './styles/App.css';

const App = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
    console.log(task, workDay);
  };
  return (
    <div className='App'>
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
      <button>Launch Task</button>
    </div>
  );
};

export default App;
