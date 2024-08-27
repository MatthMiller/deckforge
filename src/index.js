import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Main from './Components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Removido para não crinjar re-renderizações
  // <React.StrictMode>
  <Main />
  // </React.StrictMode>
);
