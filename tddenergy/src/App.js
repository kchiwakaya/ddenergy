import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './ProductDetail';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        
          
          
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;


