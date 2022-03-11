import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Vistas/Home';
import About from './Vistas/About';
import Product from './Vistas/Product';
import Login from './Vistas/Login';
import Registro from './Vistas/Registro';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
