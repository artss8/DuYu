import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'


const categories = ['Faculdade', 'Trabalho', 'Pessoal']
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(0);
  const [category, setCategory] = useState('Faculdade');
  function newTask() {
    let taskObject = {id:counter, taskName:input, status:false, category: category}
    if (input && input.trim() != '') {
      setTasks([...tasks, taskObject]);
      setCounter(counter+1);
      setInput("");
    }
  }

      
  function finishTask(id) {
      const selectedTasks = tasks.map(task => task.id === id ? {...task, status : !task.status} : task);
      setTasks(selectedTasks)
  }


  return (
  <div>

      <div className='header'>
      <h1>DuYu</h1>
      </div> 
      
      <div className='main-container'>
        <div className='add-task-container'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='task-input' placeholder='Fazer atividades facul...'/>
        <select value={category} id="category" onChange={(e) => setCategory(e.target.value)}> {categories.map(category => (<option key={category}>{category}</option>))}</select>
        <button className='btn-add' onClick={() => newTask()}>+</button>
        </div>
          <div className='task-container'>
            <ul>
              {/* listagem das tasks */} 
              {tasks.filter(task => task.category === category).map(task => (<li key={task.id} className={task.status ? 'done' : ''}><input type='checkbox' onChange={() => finishTask(task.id)}></input>{task.taskName} {task.category}</li> ))} 
            </ul> 

          </div>
      </div>
  
  </div>
);
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
