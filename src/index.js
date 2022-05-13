import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './components/app/app.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

