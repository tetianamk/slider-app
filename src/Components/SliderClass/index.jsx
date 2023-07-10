import React from 'react';
import styles from './SliderClass.module.css';


const  images = [
  'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg', 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg', 'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
  'https://wowslider.com/sliders/demo-18/data1/images/london830775.jpg'
];
const length = images.length;

class SliderClass extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      current:0,
      slides: images,
      intervalId: null,
  }

    }
   
    nextSlide = () => {
      const{ current } = this.state;
      this.setState
      ({current : current === length - 1 ? 0 : current + 1});
      // console.log(this.nextSlide);
    };

    prevSlide = () => {
      const{ current } = this.state;
      this.setState
      ({current : current === 0 ? length - 1  : current - 1});
    };

    // componentDidMount() {
    //   this.startAutoClicks();
    // }

    // componentWillUnmount() {
    //   this.stopAutoClicks();
    // }

  startAutoClicks = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(this.nextSlide, 5000);

      this.setState({ intervalId });
    }
  };

  stopAutoClicks = () => {
    this.setState((state) => {
      const { intervalId } = state;
      
      clearInterval(intervalId);

      return { intervalId: null };
    });
  };

  render(){
   const { current, slides } = this.state;
   const sliderImages = slides.map((image,index)=>{
    return (
      <div key={index}>
        {index === current && <img src={image} alt='slide'></img>}
      </div>
    )
  })

    return (
      <>
       <div className={styles.btnWrapper}>
        <button  className={styles.btn} onClick={this.startAutoClicks}>Start SlidShow</button>
        <button className={styles.btn} onClick={this.stopAutoClicks}>Stop SlideShow</button>
        </div>
        <div className={styles.imageSlider}>
        <button className={styles.Arrow}  id={styles.left} onClick={this.nextSlide}>&#10095;</button>
        <button className={styles.Arrow}  id={styles.right} onClick={this.prevSlide}>&#10094;</button>
        <div className={styles.image}>
          {sliderImages}
        </div>
      </div>
      </>
      
    );

  }
}

export default SliderClass;
