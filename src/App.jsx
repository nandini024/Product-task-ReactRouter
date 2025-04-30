

import React from 'react'

import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home'
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product';
import Reviews from "./Components/Reviews/Reviews"
const App = () => {
  return (
    <div>
     <Navbar/>
      
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Products" element={<Product/>}/>
      <Route path="/product/reviews/:id" element={<Reviews/>}/>



      </Routes>
    </div>
  )
}

export default App
