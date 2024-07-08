import React, { useState } from 'react';
import './Test.css'; // Carousel stilleri buraya ekleniyor

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={prevSlide}>Previous</button>
      <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
