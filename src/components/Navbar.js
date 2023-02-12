import React from 'react'

import {Link } from 'react-router-dom'
export default function Navbar(props) {

  // changing text and text color of mode button.................
  const textcolor = () => {
    if (props.mode === "dark") {
      return "white"
    }
    else if (props.mode === "light") {
      return "dark"
    }
  }



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Textform">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>

          </ul>
          
        </div>
        <div className={`form-check form-switch text-${textcolor()}`}>
          <input className="form-check-input" type="checkbox" onClick={props.enableDarkMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {textcolor()}Mode</label>
        </div>
      

      </div>
    </nav>
  )
}