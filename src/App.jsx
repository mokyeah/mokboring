import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router, useActionData } from "react-router-dom";
import Home from "./home";
import About from "./about"
import Browse from "./browse"
import Index from "./index"
import User from "./user"
import Intro from "./intro"
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';


function App() {
const [user, setUser] = useState(null)
const [data, setData] = useState("")
  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      getDoc(doc(firestore, "users", user.uid)).then((doc) => {
        setData(doc.data())
      })
    })
  }, [])


  
  return (
    <div className=" w-full min-h-screen flex bg-zinc-800 text-white">
    <Router>
      <div className='border-r-4 hidden-mobile h-full fixed '>
      <div className="space-y-8 text-3xl p-5 justify-between flex-col flex h-full">
        <div className='flex-col gap-5 flex text-3xl'>
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
        <div className=''>
        {user ? <Link to="/intro"><img className="rounded-md w-10 h-10" src={data?.picture}/></Link> : <Link to="/user"><Icon icon="carbon:user-avatar-filled"/></Link>}
       </div>
        </div>
        
      </div>
      <div className="flex-1 ml-24">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
        <Route path="/index/:id" element={<Index/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/intro" element={<Intro/>}></Route>
      </Routes>
      
      </div>
    </Router>
    
    </div>
  );
}

export default App
