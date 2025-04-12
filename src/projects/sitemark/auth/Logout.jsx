import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Logout() {
  
    let navigate = useNavigate()
    function handleLogout(){
        localStorage.removeItem("username")
        window.location.reload();
        navigate("/")
    }

  return (
    <div>
      <Link onClick={handleLogout} style={{ color: "#f5f6fa" }}>LogOut</Link>
    </div>
  )
}

export default Logout
