import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../navbar/Navbar';

const RootLayout = () => {
  return (
    
     <>
        <Navbar/>
        <Outlet/>
        <h1>Footer</h1>
     </>

  )
}

export default RootLayout