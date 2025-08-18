import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-center text-3xl'>hello world</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
