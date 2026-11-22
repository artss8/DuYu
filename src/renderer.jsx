import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

import { FaTrash } from "react-icons/fa";

const categories = ['Faculdade', 'Trabalho', 'Pessoal']
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Faculdade');
  const [message, setMessage] = useState('');

  // carrega as tarefas do banco uma vez, quando o app abre
  useEffect(() => {
    window.api.getTasks().then(setTasks);
  }, []);

  async function newTask() {
    if (input && input.trim() != '') {
      // o banco gera o id e devolve a tarefa completa
      const savedTask = await window.api.addTask({ taskName: input, category: category });
      setTasks([...tasks, savedTask]);
      setInput("");
    }
  }

  async function finishTask(id) {
      await window.api.toggleTask(id);
      const selectedTasks = tasks.map(task => task.id === id ? {...task, status : task.status ? 0 : 1} : task);
      setTasks(selectedTasks)
  }

  async function removeTask(id) {
    await window.api.removeTask(id);
    const selectedTask = tasks.filter(task => task.id !== id);
    setTasks(selectedTask);
    setMessage("Atividade removida com sucesso!");
    
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }


  return (
  <div>
      
      <div className='header'>
      <h1>DuYu</h1>
      {message && <div className='message-popup'>{message}</div>}
      </div> 
      
      <div className='main-container'>
        <div className='add-task-container'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='task-input' placeholder='Fazer atividades facul...'/>

        <select value={category} className='category-input' id="category" onChange={(e) => setCategory(e.target.value)}> {categories.map(category => (<option key={category}>{category}</option>))}</select>
        <button className='btn-add' onClick={() => newTask()}>+</button>
        </div>
          <div className='task-container'>
            <ul>
              {/* listagem das tasks */} 
              {tasks.filter(task => task.category === category).map(task => (<li key={task.id} className={task.status ? 'done' : ''}><input type='checkbox' checked={!!task.status} onChange={() => finishTask(task.id)}></input>{task.taskName}<button className='btn-remove' onClick={() => removeTask(task.id)}><FaTrash></FaTrash></button></li> ))}
            </ul> 

          </div>
      </div>
  
  </div>
);
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
