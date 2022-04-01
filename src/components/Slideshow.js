import React from 'react';
import { Fade as FadeShow } from 'react-slideshow-image';
import { Fade as FadeReveal } from 'react-reveal'
import 'react-slideshow-image/dist/styles.css'


const Slideshow = (props) => {
  
  const { images, title, link } = props.project

  const titleClass = title.replace(/\s+/g, '-').toLowerCase();

  const fadeImages = [...images]
  
  const properties = {
    arrows: false,
    duration: 1200,
    transitionDuration: 800,
    pauseOnHover: true
  }

  return (
    <div className="slide-container">
      <FadeShow {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <FadeReveal bottom>
            <div className="each-fade" key={index}>
              <div className={`image-container ${titleClass}-container`}>
                <img src={fadeImage.url} alt={title} className={`${titleClass}-image`}/>
              <div class="middle">
                <div class="text">Visit {link ? "Live Site" : "Project Story"}</div>
              </div>
              </div>
            </div>
           </FadeReveal>
        ))}
      </FadeShow>
    </div>
  )
}
export default Slideshow