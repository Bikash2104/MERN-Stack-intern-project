import React from 'react'
import {Route,Routes,Navigate} from "react-router-dom"
import LoginPage from '../Pages/LoginPage'
import Home from '../Pages/Home'
import SigninPage from '../Pages/SigninPage'
import Dashboard from '../Pages/Dashboard'

function Router() {
  return (
    <div>
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signin' element={<SigninPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>          
        </Routes>
      
    </div>
  )
}

export default Router
