import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import Data from './data';


const choose = Math.floor(Math.random() * 1080 + 1)

const random = choose+1

function Browse() {
  const   [num, setNum] = useState(choose)
  const [plus, setPlus] = useState(random)
 
  return (
    <div className='w-full h-screen flex justify-center'>
     <div className='flex flex-row gap-3 '>
     <div className="border-2 w-96 max-h-96 overflow-auto  h-fit  border-yellow-400 bg-slate-800 flex flex-col first-letter ">
      <div className="bg-black w-full flex">{Data[num].title}</div>
      <div className='' >{Data[num].description}</div>
      <div className='bg-black p-3'>{Data[num].code}</div>
      </div>
      <div className="border-2 w-96 max-h-96 overflow-auto  h-fit  border-yellow-400 bg-slate-800 flex flex-col first-letter ">
      <div className="bg-black">{Data[num+plus].title}</div>
      <div className='' >{Data[num+plus].description}</div> 
      <div className='bg-black p-3'>{Data[num+plus].code}</div>
      </div>
      <div className="border-2 w-96 max-h-96 overflow-auto  h-fit  border-yellow-400 bg-slate-800 flex flex-col first-letter ">
      <div className="bg-black">{Data[num+plus].title}</div>
      <div className='' >{Data[num+plus].description}</div> 
      <div className='bg-black p-3'>{Data[num+plus].code}</div>
      </div>
      <div className="border-2 w-96 max-h-96 overflow-auto  h-fit  border-yellow-400 bg-slate-800 flex flex-col first-letter ">
      <div className="bg-black">{Data[num+plus].title}</div>
      <div className='' >{Data[num+plus].description}</div> 
      <div className='bg-black p-3'>{Data[num+plus].code}</div>
      </div>
     </div>
      
     
    </div>  
  )
}

export default Browse