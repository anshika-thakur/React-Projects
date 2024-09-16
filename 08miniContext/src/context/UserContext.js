import React from "react";
// creating context
// every context is the provider. Context is like a Global variable
// when we create context we need to create provider as well
// we made the provider so that all the components can have access to the context
// <userContext> 
// component
//<userContext/>
const UserContext=React.createContext();
// throw context in the output 
export default UserContext