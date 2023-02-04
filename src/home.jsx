import React from 'react'
import { Icon } from "@iconify/react";
function home() {
  return (
      <div>
      <div className='text-4xl justify-center w-full h-screen flex hidden-mobile'>
        <div className='flex flex-col w-full'>
        <div className='p-8'>
            <div className='justify-center flex'>Mok's blog</div>
          
            </div><div className='bg-white rounded-sm h-3 w-full'></div>
            <div className='justify-center flex p-3 '>Who is Mok?</div> 
            <div className='justify-center flex'>Mok is a handsome man that is handsome</div>
            <div className='justify-center p-24 flex '>CLICK to know more</div>
        </div>
      </div>
    </div>
  
  )
}

export default home