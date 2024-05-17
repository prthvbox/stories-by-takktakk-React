import React from 'react'

import PropTypes from 'prop-types'

import './imgslider.css'

const Imgslider = (props) => {
  return (
    <div className="imgslider-container">
      <div className="imgslider-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="imgslider-image"
        />
        <div className="imgslider-lbutton">
          <svg viewBox="0 0 1024 1024" className="imgslider-icon">
            <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
          </svg>
        </div>
        <div className="imgslider-r-button">
          <svg viewBox="0 0 1024 1024" className="imgslider-icon2">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

Imgslider.defaultProps = {
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1707136507220-6e8e19fe0ae6?ixid=M3w5MTMyMXwwfDF8YWxsfDMwfHx8fHx8Mnx8MTcwNzc2ODIyOXw&ixlib=rb-4.0.3&w=1500',
}

Imgslider.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Imgslider
