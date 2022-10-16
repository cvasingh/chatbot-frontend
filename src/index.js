import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ContectsAPI } from './ContectsAPI/ContectsAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContectsAPI>
      <App />
    </ContectsAPI>
  </BrowserRouter>
);

