import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as Instagram } from '../images/svg/instagram.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
        <Instagram />
      </Link>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
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
