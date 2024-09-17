import Chai from "./chai"
// Component : it is a piece of ui that has its own logic and appreance.a component can be small as button and large as web page
function App() {
  const username="chai aur code"

  return (
  // <h1>chai aur react with vite | Anshika</h1>
  // <> aka fragements
   <>  
    <Chai/>
    <h1>chai aur react{username}</h1>
    <p>test para</p>
  </>
  )
}

export default App
