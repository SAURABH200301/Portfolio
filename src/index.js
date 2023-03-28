import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './index.module.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={`${classes.main}`}><App/></div>
  </React.StrictMode>
);

