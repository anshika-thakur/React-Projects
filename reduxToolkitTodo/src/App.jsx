import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  

  return (
    <>
      <h1>learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
// redux and react-redux both are different
// redux is the core library and react-redux is the implementation of that library for wiring ,
// so that react and redux can communicate with each other
