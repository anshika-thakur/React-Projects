import React,{useId} from "react";
// forwardRef hook
const Input=React.forwardRef(function Input({
  label,
  type="text",
  className="",
  ...props
},ref){
  const id=useId()
  return (
<div className="w-full">
  {label && <label className="inline-block mb-1 pl-1" htmlFor={id}>
    {label}
    </label>}
    <input 
    type={type}
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
    // we've taken ref from user as a prop,use it here.it will give you the refrence to your parent componenet,that is why we've used forwardRef.Component is diff,but  we need ref there so the ref is passed from there and get the accesss of state,thats how we can get the access of variable of input
    ref={ref}
    {...props}
    id={id}/>
</div>
  )
})
export default Input