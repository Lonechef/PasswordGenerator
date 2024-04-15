import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:'Saumya',
    age:24
  }
  let newArr=[1,2,3];

  return (
    <>
    
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>TailWind Test</h1>
      <Card  username="Saumya" btnText="Click Me"  />
     
    </>
  )
}

export default App
