import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../css/Slider.css'; 
 
const images = [
  'https://react-slideshow.herokuapp.com/images/slide_1.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_2.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_3.jpg',
  'https://react-slideshow.herokuapp.com/images/slide_4.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}

export default Slideshow;