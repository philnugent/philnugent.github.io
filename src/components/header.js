import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#a2b9bc`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          // }}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {siteTitle}
          </h3>
   
        </Link>
      </h1>
          <Menu/>
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
