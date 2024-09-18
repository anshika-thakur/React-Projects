import { createSlice,nanoid} from "@reduxjs/toolkit";
// nanoid is used to generate unique id
const initialState={
  todos:[{id:1,text:"Hello world"}]
}
export const todoSlice=createSlice({
  name:'todo',
  initialState,
  // reducers are the object,it inludes properties and function
  reducers:{
    // addTodo here is the property
    // state variable will give the access of initialState 
      addTodo:(state,action)=>{
        const todo={
          id:nanoid(),
          text:action.payload
        }
        state.todos.push(todo)
      },
      removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
      }
  }
})
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer
