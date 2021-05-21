import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/jquery-3.6.0.min';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
<>
  <BrowserRouter>
    <App />
  </BrowserRouter>

</>
  ,document.getElementById('root')
);

