import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import faithLogo from '../assets/faith-logo-realest.png';

import './header.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#6A961F`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-holder">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={faithLogo} className="header__logo" alt="faith of a child foundation" />
        </Link>
      </h1>
      <nav className="main-menu">
        <h4 style={{ marginBottom: 0 }}>
          <Link
            to="/about-us"
            style={{
              textDecoration: 'none',
            }}
          >
            About Us
          </Link>
        </h4>
        <h4 style={{ marginBottom: 0, marginLeft: '1.5rem', alignSelf: 'flex-end' }}>
          <Link
            to="/projects"
            style={{
              textDecoration: 'none',
            }}
          >
            Projects
          </Link>
        </h4>
        <h4 style={{ marginBottom: 0, marginLeft: '1.5rem', alignSelf: 'flex-end' }}>
          <Link
            to="/donate"
            style={{
              textDecoration: 'none',
            }}
          >
            Donate
          </Link>
        </h4>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
