import { useState,useEffect } from "react";
function useCurrencyInfo(currency){
  const [data,setData]=useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())// then() method takes up two arg:callback functions for the fulfilled cases and rejected cases of the promise
    .then((res)=>setData(res[currency]))
    console.log(data);
  },[currency])
  
  return data;
}
export default useCurrencyInfo;