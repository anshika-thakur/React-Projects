import React from 'react'   //{ StrictMode }
import {createRoot} from 'react-dom/client' //{ createRoot } 
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>custom react!</h1>
        </div>
    )
}
const anotherElement=(
    <a href="https://google.com" target='_blank'>visit google</a>
)
const anotherUser="chai aur react"
// babel injects React.createElement. underneath is the proper syntax to create react element or tree structure
const reactElement=React.createElement(
'a',
{href:"https://google.com", target:"_blank"},
'click me to visit google',
anotherUser// here we inject evaluated expression ie variables
)
// const ReactElement={
//     type:'a',
//     props:{
//       href:'https://google.com',
//       target:'_blank'
//     },
//     children:'click me to visit google'
//   }
  
createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    reactElement
  
)
// 1.When we create a component in react by default babel(Transpiler) will inject a element React.createElement ()
//2. Evaluated Expression
