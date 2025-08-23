import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name="world",age}) {
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>hello {name}</h1>
      <h1>Name = {name}</h1>
      <h1>Age = {age || 23}</h1>
    </>
  )
}

export default App
