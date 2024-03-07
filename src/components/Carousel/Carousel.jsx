import PropTypes from 'prop-types';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          />
        </div>
      ))}
      <button onClick={prevSlide} className="prev-slide">
        <img src="../images/chevron-left-solid.svg" alt="Previous slide" />
      </button>
      <button onClick={nextSlide} className="next-slide">
        <img src="../images/chevron-right-solid.svg" alt="Next slide" />
      </button>
      <div className="indicator">
        {slide + 1} / {images.length}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Carousel;
