import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Blog from './Blog'
import Signup from './auth/Signup'
import SignIn from './auth/SignIn'
import Footer  from './Footer'



function RoutingPage() {
  return (
    <div>
        <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<Signup />} />
         </Routes>
         {/* <Blog/> */}
         <Footer />
        </BrowserRouter>
      
    </div>
  )
}

export default RoutingPage
