import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav class="navbar bg-secondary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-body" href="#">
     <Link to={"/"}><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="50" alt="logo"/></Link> 
      <span className="text-uppercase" style={{color:"white"}}>Quiz App</span>
    </a>
  </div>
</nav>
    </div>
  )
}

export default Header