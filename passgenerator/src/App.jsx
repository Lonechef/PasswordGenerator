 import { useState,useCallback,useEffect, useRef } from 'react'



function App() {
  const [length,setlength]=useState(8);
  const [Num,setNum]=useState(false);
  const[character,setcharacter]=useState(false);
  const[password,setpassword]=useState("");

const referenceofpassword = useRef(null)
 const passwordref =useCallback(()=>{
    let pass="";
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(Num){
      str+="0123456789";
    }
    if(character) {
      str+="!@#$%^&*-_+={}[]~`"
    }
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpassword(pass);
  },[length,Num,character,setpassword])

  const copyPasswordtoclip = useCallback(()=>{
    referenceofpassword.current?.select();
    referenceofpassword.current?.setSelectionRange(0,990);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordref()
  }
  ,[length,Num,character,passwordref])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center'>Password generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordref}
       />

       <button onClick={copyPasswordtoclip} 
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>

       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
           />
           <label>Length:{length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="Checkbox" 
          defaultChecked={Num}
          id='numberInput'
          onChange={()=>{
            setNum((prev)=>!prev)
          }}

          />
          <label>Number</label> 

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={character}
          id='charinput'
          onChange={()=>
          setcharacter((prev)=>!prev)}
          />
          <label>Character</label>

        </div>
       </div>
     </div>
    </>
  )
}

export default App;