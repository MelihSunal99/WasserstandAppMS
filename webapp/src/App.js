import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="top-center"></ToastContainer>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add' element={<AddEdit />} />
        <Route path='/update/:id' element={<AddEdit />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
