import { useState } from 'react'


function App() {


 const [color,setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setcolor('red')} className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'red'} }> Red</button>
          <button onClick={()=>setcolor('blue')} className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'Blue'} }> Blue</button>
          <button onClick={()=>setcolor('yellow')} className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'Yellow'} }> Yellow</button>
          <button onClick={()=>setcolor('black')} className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'Black'} }> Black</button>
          <button onClick={()=>setcolor('green')} className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'Green'} }> Green</button>
          <button  onClick={()=>setcolor('pink')}className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'Pink'} }> Pink</button>
          <button onClick={()=>setcolor('darkblue')} className='outline-none px-4 py2 rounded-full text-white shadow-lg' style={{backgroundColor:'darkblue'} }> Dark Blue</button>
          

        </div>
        
      </div>
    </>
  )
}

export default App
