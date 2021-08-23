import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient sticky-sm-top">
        <div className="container fw-bold">
          <a className="navbar-brand disabled" style={{ marginRight: "0px" }} href="/"><img src={logo} alt="logo" id="navbarlogo"></img></a>
          <a className="navbar-brand text-light" style={{ marginRight: "0px" }} href="https://www.linkedin.com/in/taraskiricenko/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="navbar-brand text-light" style={{ marginRight: "0px" }} href="https://github.com/TarasKiricenko" target="_blank" rel="noreferrer">GitHub</a>
          <span className="navbar-brand" style={{ marginRight: "0px" }}>
            <span className="nav-item dropdown" style={{ 'textDecoration': "none" }}>
              <span className="navbar-brand dropdown-toggle text-light" style={{ marginRight: "0px" }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Deployed Projects
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="https://taraskiricenko.github.io/Project-1/" target="_blank" rel="noreferrer">Space Invaders</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="https://joan-and-taras-beer-shop.netlify.app/" target="_blank" rel="noreferrer">Beer shop</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="https://cest-sei-project-3.herokuapp.com/" target="_blank" rel="noreferrer">CEST coworking and events</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="https://taras-social-gallery.herokuapp.com/" target="_blank" rel="noreferrer">Taras Social Gallery</a></li>
              </ul>
            </span>
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar