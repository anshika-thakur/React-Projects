import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>react with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
