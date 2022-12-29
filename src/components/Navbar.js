import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    //curly brcket in the classsName specifies that we have put it in the javascript
    //`` this is called as backticks this are used so that we can make the use of the templates
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            s
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                {/* here we replace the a and href by the LINK and to so that page do not get reload and we can smoothly work on our task */}
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            {/* int bellow synex we have used the trnary sytexx ?: to givethe if condition */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              {/* text-light is used to give tyhe white color to the text in the bootstrap */}
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

//It will restrict the datatypes in the props like if we write ubnstead of rthe string it weill show an error in the inspecta dn terminal of the site
// Navbar.PropTypes = {
//     title: PropTypes.string.isRequired,
//     Home: PropTypes.string
// }

//it will set the default value for the element if we have not given the any value
Navbar.defaultProps = {
    title: 'set title here',
    Home: 'add tyhe home here'
}