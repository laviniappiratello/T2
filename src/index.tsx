import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 IMPORTANTE: 'react-dom/client'!
import Roteador from './roteador';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'; // opcional: se usar dropdown, modal, etc

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>
);

reportWebVitals();
