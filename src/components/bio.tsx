import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
const Bio = () => {
  return (
    <div className="bio">
      <div className='bio-avatar'>
      {/* <StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={['auto', 'webp']}
        src="../../static/assets/gatsby-icon-100x100.png"
        quality={95}
        alt="Profile Picture"
      /> */}
      <FontAwesomeIcon size="2x" icon={faLaptop}/> 
      </div>
    </div>
  )
}

export default Bio
