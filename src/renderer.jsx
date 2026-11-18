import React from 'react';
import { createRoot } from 'react-dom/client';
import './test.css'
function App() {
  return (
  <div className='main-container'>
  <h1>desgraça viu</h1>
  </div>
  
);
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
