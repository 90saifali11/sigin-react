import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Products from './pages/Products';
import About from './pages/About';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail.jsx";
import SignupForm from './pages/signup.jsx';
import SigninForm from './pages/signin.jsx';
import UserProfile from './pages/profile.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />      
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfile />} />
              
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

