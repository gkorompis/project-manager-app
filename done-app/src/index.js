import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DoneApp from './DoneApp';

import './assets/bootstrap_lux.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DoneApp />
  </React.StrictMode>
);