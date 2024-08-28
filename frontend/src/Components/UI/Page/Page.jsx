import React from 'react'

const Page = (props) => {
  return (
    <div className='h-dvh w-svw bg-gradient-to-r from-[#C7CEE0] to-[#E2E5EE] flex justify-center items-center font-sans'>
      {props.children}
    </div>
  )
}

export default Page
