import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // components
  // object component
  let myObj={
    username:"anshika",
    age:19
  }
  // array component
  let newArr=[1,2,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >tailwind test</h1>
    <Card channel="chaiaurcode" btnText="click me"/>
    <Card channel="Anshika" btnText="visit me"/>
    </>
  )
}

export default App
