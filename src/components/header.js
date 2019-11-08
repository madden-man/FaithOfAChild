import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#006F45`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav style={{ alignSelf: 'flex-end', display: 'flex', justifyContent: 'flex-end', flexGrow: '1'}}>
        <h4 style={{ marginBottom: 0, marginLeft: '10rem' }}>
          <Link
            to="/about-us"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            About Us
          </Link>
        </h4>
        <h4 style={{ marginBottom: 0, marginLeft: '1.5rem', alignSelf: 'flex-end' }}>
          <Link
            to="/get-involved"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Get Involved
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
