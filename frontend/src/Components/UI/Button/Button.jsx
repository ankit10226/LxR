import React from 'react'

const Button = (props) => {
  return (
    <button className={props.className || "rounded-md h-10 w-20 border bg-[#6439BC] text-white font-semibold my-2 cursor-pointer"} type={props.type || 'button'} onClick={props.onClick} disabled={props.disabled || false}>
      {props.children}
    </button>
  )
}

export default Button
