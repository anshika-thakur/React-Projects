import{configureStore}from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// the store is the central component that holds the state of your entire application.
// it is an object that hold the state and serves as the single source of truth.
// the store is created using configureStore
export const store=configureStore({
  reducer:todoReducer
})