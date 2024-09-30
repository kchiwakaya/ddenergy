import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './ProductDetail';
import Footer from './footer';
import QuotationRequestForm from './contact';
import About from './about'; // {{ edit_2 }}

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<QuotationRequestForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


