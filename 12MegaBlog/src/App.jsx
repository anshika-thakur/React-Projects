import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // thats how you can access of environment variable
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>A blog with appwrite</h1>
    </>
  )
}

export default App
