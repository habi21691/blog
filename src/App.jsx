import React from 'react'
import ReactDOM from 'react-dom/client'

import {  Route, Routes } from 'react-router-dom'

import styled from 'styled-components'
import { LoginForm } from './components/loginForm'
import { RegistrationForm } from './components/registrationForm'
import Blog from './page/blogList'
import Home from './page/home'


 function App() {


  return (
         <div className=''>
              <Routes>
                     <Route path={'/'} element={<Home/>}/>
                     <Route path='/LoginForm' element={<LoginForm/>}/>
                     <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
                     <Route path= '/blog/:id' element={<Blog/>}/>
              </Routes>
         </div>
  )
}

export default App;