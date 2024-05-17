import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card331.css'

const GalleryCard331 = (props) => {
  return (
    <div className={`gallery-card331-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card331-image"
      />
      <div className="gallery-card331-container">
        <h1 className="gallery-card331-text">{props.title}</h1>
        <span className="gallery-card331-text1">{props.subtitle}</span>
      </div>
    </div>
  )
}

GalleryCard331.defaultProps = {
  title: 'Project Title',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  imageAlt: 'image',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
}

GalleryCard331.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default GalleryCard331
