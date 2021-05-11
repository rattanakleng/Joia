/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary'
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary'
// import LoginOrLogout from '../LoginOrLogout/LoginOrLogout'
import { useIsAuthenticated, useLogout } from '../../utils/auth'

import './Navbar.css'

export const Navbar = () => {
  const [click, setClick] = useState(false)
  // const [active, setActive] = useState(true)
  // const [showButton, setShowButton] = useState(true)

  const handleClick = () => setClick(!click) // make it toggle between true and false

  const closeMobileMenu = () => setClick(false)

  const isAuthenticated = useIsAuthenticated()
  const logout = useLogout()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  // const showButtonMode = () => {
  //   window.innerWidth <= 960 ? setShowButton(false) : setShowButton(true)
  // }

  // useEffect(() => {
  //   showButtonMode()
  // }, [])

  // window.addEventListener('resize', showButtonMode)
  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
          About
        </Link>
      </li>

      <li className="nav-item">
        <a
          href="mailto: joia@live.com"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          Contact Us
        </a>
      </li>

      <li className="nav-item">
        <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
          Post Artwork
        </Link>
      </li>

      {/* <li>
        <Link
          to="/allartworksbyuser"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          Your Artworks
        </Link>
      </li> */}

      <li className="nav-item">
        <Link to={localStorage.getItem('jwtToken') ? '/account' : '/login'} 
          className="nav-links" onClick={closeMobileMenu} >
          Profile
        </Link>
      </li>

      <li>
        <Link to="/" className="nav-links">
          <ButtonSecondary text="Log Out" onClick={handleLogout} />
        </Link>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
          About
        </Link>
      </li>

      <li className="nav-item">
        <a
          href="mailto: joia@email.com"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          Contact Us
        </a>
      </li>

      <li className="nav-item">
        <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
          Sell Artwork
        </Link>
      </li>

      <li>
        <Link to="/signup" className="nav-links">
          <ButtonPrimary text="Register" onClick={closeMobileMenu} />
        </Link>
      </li>

      <li>
        <Link to="/login" className="nav-links">
          <ButtonSecondary text="Login" />
        </Link>
      </li>
    </Fragment>
  )

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              className="navbar-logo"
              src="./assets/img/logo.png"
              alt="Logo image"
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className="nav-item">
              <Link
                to="/allartworksbyuser"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                User Artwork
              </Link>
            </li> */}

            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}
