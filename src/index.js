import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { makeServer } from "./server";
import { ProductContextProvider } from './contexts/products';
import { FilteredProductContextProvider } from './contexts/ProductsFilter';
import { UserContextProvider } from './contexts/user';

//Call make server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <FilteredProductContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </FilteredProductContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);