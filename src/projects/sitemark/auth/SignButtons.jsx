import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Logout from './Logout'

function SignButtons() {
  return (
    <div>
      <ul className=" flex flex-col lg:flex-row justify-end  space-x-4">
        <li
          className="px-3 py-2 text-sm font-medium cursor-pointer hover:bg-[#333b4d] text-[#f5f6fa] rounded-lg">
          {
            (localStorage.getItem("username")) ? <Logout /> : <Link to='signin' style={{ color: "#f5f6fa" }}>Sign in</Link>
          }
        </li>
        {
         (!localStorage.getItem("username")) && 
        <li
        className="px-3 py-2 text-sm font-medium  bg-[#f5f6fa] cursor-pointer hover:bg-[#c8cedc] text-black rounded-lg">
          <Link to="signup" style={{ color: "black" }}>Sign up</Link>
        </li>
          }
      </ul>
    </div>
  )
}

export default SignButtons
