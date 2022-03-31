import React from 'react';
import { Fade as FadeShow } from 'react-slideshow-image';
import { Fade as FadeReveal } from 'react-reveal'
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
      <FadeShow {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <FadeReveal bottom>
            <div className="each-fade" key={index}>
              <div className="image-container container">
                <img src={fadeImage.url} alt={title} className="image"/>
              </div>
              {/* <div class="middle">
                <div class="text">Visit Website</div>
              </div> */}
            </div>
           </FadeReveal>
        ))}
      </FadeShow>
    </div>
  )
}
export default Slideshow