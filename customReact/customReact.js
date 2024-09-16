function customRender(reactElement,container){
  /*const domElement=document.createElement
  (reactElement.type)
  domElement.innerHTML=reactElement.children
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)
  container.appendChild(domElement)*/
  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  for (const prop in reactElement.props) {
    if(prop=='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
      
    
  }
  container.appendChild(domElement)
}
// as we didn't know the knowledge of how to create react element so,we have created by ourself
const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'click me to visit google'
}

const mainContainer = document.querySelector("#root")
// render method which takes element and injects into the container
customRender(reactElement,mainContainer)
// react converts object into tree structure and inject it