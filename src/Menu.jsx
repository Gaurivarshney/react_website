import React from 'react'

import './Active.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Menu() {
  return (
  <div className="container-fluid mt-2">
    <div className="row">
    <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" >ReactWebsite</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service" >Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    </div>
  </div>
  )
}

export default Menu
