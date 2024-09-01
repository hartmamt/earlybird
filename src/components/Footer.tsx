import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props: React.PropsWithChildren<{ timeout?: boolean }>) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; earlybird - Made in Batavia, Ohio</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer