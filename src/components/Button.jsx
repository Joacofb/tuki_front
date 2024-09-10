import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='bg-cyan-800 p-2 rounded-lg'>
        {text}
    </button>
  )
}

export default Button