import React from 'react'

const Header = ({title}) => {
  return (
    <header className='text-center p-2'>
        <h1 className='uppercase font-bold text-4xl bg-transparent text-white text-opacity-2'>{title}</h1>
      
    </header>
  )
}
    
export default Header
