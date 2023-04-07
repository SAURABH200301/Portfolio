import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './index.module.css';
import App from './App';
import { DarkModeContextProvider } from './components/context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <div className={`${classes.main}`}><App /></div>
    </DarkModeContextProvider>
  </React.StrictMode>
);

