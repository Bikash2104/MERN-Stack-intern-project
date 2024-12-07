import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import LoginPage from './LoginPage'


function Home() {
  return (
    <>

      <div className='homepage'>
        
        <LoginPage/>
      </div>
    </>
  )
}

export default Home
