import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = (props) => {
  
  const { image, title } = props.props
  console.log(image, title)
  
  const fadeImages = [
    {
    url: image[0]
    },
    {
    url: image[1]
    },
    {
    url: image[2]
    },
  ];
  // function imageUrls () {
  //   let url = {}
  //    for (let i = 0; i < image.length; i++) {
  //       url = image
  //     }
  // }

  //   const fadeImages = [
  //     url = imageUrls()
  //   ]
  
    const properties = {
      arrows: false,
      duration: 2500,
      transitionDuration: 500,
      Easing: 'cubic'
    }
    
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} alt="Project Images"/>
            </div>
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow