import React from 'react'
import { Icon } from "@iconify/react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
function home() {
  return (
      <div>
      <div className='text-4xl justify-center w-full h-screen  hidden-mobile flex'>
        <div className='flex-col w-full'>
        <div className='p-8'>
            <div className='justify-center flex'>Mok's blog</div>
          
            </div><div className='bg-white rounded-sm h-3 w-full'></div>
            <div className='justify-center flex p-3 '>Who is Mok?</div> 
            <div className='justify-center flex'>Mok is a handsome man that is handsome</div>
            <div className='justify-center p-24 flex' ><Link to="/about "><button className="p-3 rounded-md">Click to know more</button></Link>
            </div>
        </div>
      </div>
    </div>
  
  )
}

export default home