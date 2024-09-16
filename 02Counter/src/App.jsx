import { useState } from 'react'// to import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(15)
    // [variable,function]
  // usestate(hooks) is responsible for the changing of the states(doesn't mean changing the value),the change is get propogate inside the ui
  
//let counter=5
const addValue=()=>{
  console.log("value added",counter);
  
  //counter=counter+1;
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)

  // setcounter is used to update the variable
  // react controls the ui updation.it provides hooks concept which controls the updation of data
}
const removeValue=()=>{
  setCounter(counter-1)
}
  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
