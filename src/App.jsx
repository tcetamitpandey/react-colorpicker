import React, { useState } from 'react'
import { FiCopy } from "react-icons/fi";

const App = () => {

  const [myColor,setMyColor]=useState("#475569")

  function HandleColor(e){
    setMyColor(e.target.value)
  }

  function copyColor(){
    navigator.clipboard.writeText(myColor)
    alert("Color Copied 🙌")
  }

  return (
    <div className='w-full h-screen ' style={{backgroundColor:myColor}}>
      <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-[20vh] rounded-3xl bg-slate-300 flex justify-center content-center flex-col gap-10 '>
        <div className='text-[20px] md:text-[40px] font-semibold text-slate-700 tracking-tight text-nowrap' >Color Picker By Amit Pandey</div>
        <div className='flex justify-around items-center '>
          <input className='rounded-lg px-3 py-1 bg-[#CBD5E1]' type="color" onChange={HandleColor} name="" id="" />
          <span className='shadow-lg p3'>{myColor}</span>
          <button onClick={copyColor} >< FiCopy size={30} /></button>
        </div>
      </div>
    </div>
  )
}

export default App