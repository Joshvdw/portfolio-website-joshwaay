import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = (props) => {
  
  const { images, title } = props.project

  const fadeImages = [...images]
  
  const properties = {
    arrows: false,
    duration: 1500,
    transitionDuration: 750,
    pauseOnHover: false
  }

  return (
    <div className="slide-container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} alt={title}/>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow