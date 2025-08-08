import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { ProductProvider } from '../components/ProductProvider.jsx';
import ProductProvider from "./components/ProductProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider >
      <App />
    </ProductProvider>

  </BrowserRouter>
);
