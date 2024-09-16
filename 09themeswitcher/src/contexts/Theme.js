import {createContext,useContext} from "react";
// here context take default variable and function
export const ThemeContext=createContext({
  themeMode:"light",//default variable
  darkTheme:()=>{},//default function
  lightTheme:()=>{}
})
// exporting variable
export const ThemeProvider=ThemeContext.Provider
// exporting custom hook(useTheme)
export default function  useTheme(){
  return useContext(ThemeContext)
}
