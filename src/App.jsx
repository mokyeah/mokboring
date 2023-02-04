import React from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import About from "./about"
import Browse from "./browse"


function App() {
  return (
    <div className=" w-full h-screen flex bg-zinc-800 text-white ">
    <Router>
      <div className='border-r-4 hidden-mobile '>
      <div className="space-y-8 text-3xl p-5 ">
        <div>
          <Link to="/home"><Icon icon="material-symbols:home" /></Link>
        </div>
        <div className="">
          <Link to="/about"><Icon icon="gridicons:notice-outline" /></Link>
        </div>
        <div>
          <Link to="/browse"><Icon icon="material-symbols:manage-search" /></Link>
        </div>
       
        </div>
      </div>
      <div className="flex-1">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
        
        
      </Routes>
      
      </div>
    </Router>
    
    </div>
  );
}

export default App
