import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RoomsProvider} from './components/context/context.js';

ReactDOM.render(
  <RoomsProvider>
    <App />
  </RoomsProvider>,
  document.getElementById('root')
);
