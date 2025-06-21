import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Blog from './Blog'
import Signup from './auth/Signup'
import SignIn from './auth/Signin'
import Footer  from './Footer'
import Pricing from './Pricing'
import Features from './Features'
import Testimonial from './Testimonial'
import Faq from './Faq'
import HighlightsHeader from './HighlightsHeader'



function RoutingPage() {
  return (
    <div>
        <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/features' element={<Features/>}/>
            <Route path='/testimonials' element={<Testimonial/>}/>
            <Route path='/highlights' element={<HighlightsHeader/>}/>
            <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='/faq' element={<Faq />}/>
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
