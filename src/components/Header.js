import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  
  const style = {
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'

  }

  return (
    <div className='mb-4'>
    <header style={style} className="flex flex-col py-4">
      <h1  className='text-white text-center py-2'>Book Management App</h1>
     
      <div className="w-full h-12 flex gap-x-16 justify-center ">
      <p className='py-2'>
        <NavLink to="/" className="text-white bg-green-400 px-4 py-2">
           Book List
        </NavLink></p>
        <p className='py-2'>
        <NavLink to="/add" className="text-white bg-green-400 px-4 py-2">
          Add Book
        </NavLink></p>
      </div>
    </header>
    </div>
  )
}

export default Header
