// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import './style.css'; // Import the CSS file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
