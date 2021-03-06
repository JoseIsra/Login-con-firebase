import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Datalayer } from './Datalayer';



ReactDOM.render(
  <React.StrictMode>
    <Datalayer  >
    <App />
    </Datalayer>
  </React.StrictMode>,
  document.getElementById('root')
);
