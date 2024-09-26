import React from "react";
function Button({
  // children simply means text its just the way of writing
  // these are the default value of button if someone wants to overwrite them they can 
  children,
  type="button",
  bgColor="bg-blue-600",
  textColor="text-white",
  className="",
  ...props
}){
  return(
    <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`} {...props}>{children}</button>
  )
}
export default Button