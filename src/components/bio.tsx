import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
const Bio = () => {
  return (
    <div className="bio">
      {/* <StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={['auto', 'webp']}
        src="../../static/assets/gatsby-icon-100x100.png"
        quality={95}
        alt="Profile Picture"
      /> */}
      <FontAwesomeIcon icon={faLaptop}/> 
    </div>
  )
}

export default Bio
