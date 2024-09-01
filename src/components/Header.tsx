import React from 'react'
import PropTypes from 'prop-types'
import Bio from './bio'

const Header: React.FC<React.PropsWithChildren<{ timeout?: boolean; onOpenArticle: (article: string) => void }>> = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Bio />
      {/* <span className="icon fa fa-laptop"></span> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Earlybird Technology</h1>
        <p>
        Specializing in technical development, design, and innovation.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
