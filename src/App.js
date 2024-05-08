import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Retro from './Components/Cars/Retro/Retro';
import Premium from './Components/Cars/Premium/Premium';
import Cabriolet from './Components/Cars/Cabriolet/Cabriolet';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/retro' element={<Retro />}/>
        <Route path='/premium' element={<Premium />}/>
        <Route path='/cabriolet' element={<Cabriolet />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;