import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  // we collected the variables which is shown in the ui(input)
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const [Password,setPassword]=useState("")
  // use ref hook
  const passwordRef=useRef(null)
  // usecallback not only resposible to run the function but it responsible to memorize the function,it optimize the function and let it stayed in cache
  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="`~!@#$%^&*"
    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
     pass+=str.charAt(char)
     setPassword(pass)
    
  }
  },[length,numberAllowed,charAllowed,setPassword])
  const copyPasswordToclipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(Password)},[Password]
  )

  // useeffect means if there is chedchad in dependencies then run the function again
   useEffect(()=>{
    PasswordGenerator()
   },[length,numberAllowed,charAllowed,PasswordGenerator])
  
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input  type='text'
     value={Password}
     className='outline-none w-full py-1 px-3'
     placeholder='password'
     readOnly
     ref={passwordRef}
     />
     <button  onClick={copyPasswordToclipBoard}
     className='outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}} />
          <label >Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
           type="checkbox"
           defaultChecked={numberAllowed}  
           id='numberInput'
           onChange={()=>{
            setNumberAllowed((prev)=>!prev);
           }}
           />
           <label htmlFor='numberInput' >Numbers</label>
        </div>
        <div className='felx items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev);//fired a callback so that i can have the access of the previous value
          }} />
          <label htmlFor="characterInput">characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
// 1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
//2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
//3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values