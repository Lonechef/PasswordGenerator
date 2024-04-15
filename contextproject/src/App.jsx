import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/themes'

function App() {
  const[themeMode,setthemeMode]=useState('light')
  
  const lighttheme =()=>{
    setthemeMode("light")
  }
  const darktheme =()=>{
    setthemeMode("dark")
  }


  //Changeing the theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("Light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* Theme Button */}
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card Button */}
                    </div>
                </div>
            </div>
    </ThemeProvider>
   
  )
}

export default App
