import React from 'react'
import './ButtonPrimary.css'

const ButtonPrimary = ({name,type,onClick}) => {
  return (
    <button className='btnn' onClick={onClick} type={type}>
        {name}
    </button>
  )
}

export default ButtonPrimary