import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("lavender")
  return (
    <>
    <div
    className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-30 inset-x-0'>
        <div className='fixed flex flex-wrap bg-white px-3 py-2 rounded-3xl gap-3 shadow-lg'>
          <button className='bg-red-600 rounded-2xl px-3 text-white' onClick={()=>{setColor("red")}}>Red</button>
          <button className='bg-blue-600 rounded-2xl px-3 text-white'onClick={()=>{setColor("blue")}}>Blue</button>
          <button className='bg-green-400 rounded-2xl px-3 text-white'onClick={()=>{setColor("green")}}>Green</button>
          <button className='bg-yellow-300 rounded-2xl px-3 text-white'onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className='bg-purple-500 rounded-2xl px-3 text-white'onClick={()=>{setColor("purple")}}>Purple</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
