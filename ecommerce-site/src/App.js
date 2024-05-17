import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './components/shop/shop';
import Cart from './components/cart/cart';
import './App.css';

function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
