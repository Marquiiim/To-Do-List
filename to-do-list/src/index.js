import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaskScreen from './components/TaskScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskScreen />
  </React.StrictMode>
);
