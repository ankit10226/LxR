import React from 'react'

const PageBody = (props) => {
  return (
    <div className='bg-red-50 h-5/6 w-11/12'>
      {props.children}
    </div>
  )
}

export default PageBody
