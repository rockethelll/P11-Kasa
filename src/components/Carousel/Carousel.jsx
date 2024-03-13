import PropTypes from 'prop-types';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setSlide((slide + 1) % images.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setSlide((slide - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div className="carousel" onKeyDown={handleKeyDown} tabIndex="0">
      {/* Existing image rendering logic */}
      {images.map((image, index) => (
        <div key={index} className="carousel-img">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          />
        </div>
      ))}

      {/* Previous slide button */}
      <button onClick={prevSlide} className="prev-slide">
        <img src="../images/chevron-left-solid.svg" alt="Previous slide" />
      </button>

      {/* Next slide button */}
      <button onClick={nextSlide} className="next-slide">
        <img src="../images/chevron-right-solid.svg" alt="Next slide" />
      </button>

      {/* Slide indicator */}
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
