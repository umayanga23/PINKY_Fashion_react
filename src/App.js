import ShopCategory from './Pages/ShopCategory';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';

import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner = {men_banner} category = "men"/>} />
          <Route path='/womens' element={<ShopCategory banner = {women_banner} category= "women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category = "kids" />} />
          <Route path='/products' element={<Product />} >
            <Route path=':productId' element ={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
