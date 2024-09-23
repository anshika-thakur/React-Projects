import { createSlice } from "@reduxjs/toolkit";
// we are creating slice to track the authentication of user 
// if user is authenticated or not

// initially we don't have the userdata 
const initialState=({
  status:false,
  userData:null
})
const authSlice=createSlice({
  name :"auth",
  initialState,
  reducers:{
    login:(state,action)=>{
      state.status=true,
      state.userData=action.payload.userData// here we are getting the user data from state

    },
    logout:(state)=>{
    state.status=false,
    state.userData=null
    }
  }
})
export const {login,logout}=authSlice.actions
export default authSlice.reducer;