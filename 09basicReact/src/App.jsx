import { useState } from 'react'
import './App.css'
import useTheme, { ThemeProvider } from './Contexts/Theme'
import { useEffect } from 'react'
import Button from './Component/button'
import Card from './Component/Card'

function App() {
  const [themeMode, setTheme] = useState("light")
  const lightTheme = ()=>{
    setTheme("light")
  }
  const darkTheme = ()=>{
    setTheme("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* theme button */}
                <Button/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/* card */}
                <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default App
