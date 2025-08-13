import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("")

  let passGen = useCallback(()=>{

    let p = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+="0123456789";

    if(charAllowed) str+="!@#$%&*_-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1 )
      p+=str.charAt(char);
    }
    setPass(p);

  },[length,numAllowed,charAllowed])

  useEffect(()=>{
    passGen();
  },[length,numAllowed,charAllowed])

  let passRef = useRef(null);

  let copyPass = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])

  return (
    <>
    <div className='flex justify-center '>
        <div className='bg-blue-900 my-28 mx-20 px-6 py-4 rounded-2xl shadow-lg'>
          <div>
            <h1 className='text-center mb-4 text-white'>Password Generator</h1>
            <input className='bg-white mb-3 px-3 outline-none rounded-l-md w-85' 
            type="text"  
            value={pass} 
            readOnly
            placeholder='Password'
            ref = {passRef}
            />
            <button className='bg-blue-300 px-3 rounded-r-md w-20' onClick={copyPass}>Copy</button>
          </div>
          <div className='flex flex-wrap gap-3'>
            <input type="range" min={8} max={25} value={length} onChange={(e)=>{
              setLength(e.target.value)
            }} />
            <label className='text-white'>Length:{length}</label>
            <input type="checkbox" onChange={()=> setNumAllowed((pre)=>!pre)} />
            <label className='text-white'> Number</label>
            <input type="checkbox" onChange={()=> setCharAllowed((pre)=>!pre)} />
            <label className='text-white'> Character</label>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App
