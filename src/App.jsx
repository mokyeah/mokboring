import React from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import About from "./about"
import Browse from "./browse"
import Shit from "./shit"

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
        <div>
          <Link to="/shit"><Icon icon="mdi:emoticon-poop" /></Link>
        </div>
        </div>
      </div>
      <div className="flex-1">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
        <Route path="/shit" element={<Shit/>}></Route>
        
      </Routes>
      
      </div>
    </Router>
    <div className='hidden-pc flex flex-col justify-center items-center w-full h-screen gap-8 '>
      <div>Sorry but mok is not bored now so nothing for phone</div>
      <div className='text-4xl'><Icon icon="fa6-solid:poop" /></div>
      <div>Tap 3 dots icon the menu options.</div>
      <div>Select the checkbox against the Desktop site.</div></div>
    
    </div>
  );
}

export default App
