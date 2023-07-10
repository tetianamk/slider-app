import React, { useState, useEffect } from 'react';
import styles from'./SliderFunc.module.css';

function SliderFunc() {
// Create state variables for the index and image array
const [index, setIndex] = useState(0);
const images = [
  'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg', 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg', 'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
  'https://wowslider.com/sliders/demo-18/data1/images/london830775.jpg'
];
const nextSlide = () => {
  setIndex(index === images.length - 1 ? 0 : index + 1);
};

const prevSlide = () => {
  setIndex(index === 0 ? images.length - 1 : index - 1);
};


useEffect(() => {
const intervalId = setInterval(() => {
setIndex(prevIndex => (prevIndex + 1) % images.length);
}, 5000);
return () => clearInterval(intervalId);
}, []);

return (
  <div className={styles.imageSlider}>
    <button className={styles.Arrow} id={styles.left} onClick={prevSlide}>&#10095;</button>
    <button className={styles.Arrow} id={styles.right} onClick={nextSlide}>&#10094;</button>
    <img  className={styles.image} src={images[index]} alt='Slider' /> 
  </div>
);
}

export default SliderFunc;