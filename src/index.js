import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { makeServer } from "./server";
import { ProductContextProvider } from './contexts/products';

//Call make server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);