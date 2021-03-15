import { useState } from 'react';

import './App.css';

import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import Header from './Components/Header';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'text dfasd',
      day: 'March 14 ',
      reminder: true
    }
  ])

  const [showInputs, setShowInputs] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTas = { id, ...task };
    setTasks([...tasks, newTas]);
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className='container'>
      <Header showInputs={showInputs} title='title' buttonTogle={() => setShowInputs(!showInputs)}></Header>
      { showInputs && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
        : "no tasks"
      }
    </div>
  );
}

export default App;
