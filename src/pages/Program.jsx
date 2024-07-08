import React from 'react';
import Test from "../components/Car/Test"

const Program = () => {
  const images = [
    '/assets/images/cover/kharkov.jpeg',
    '/assets/images/cover/poland.jpg',
    '/assets/images/cover/istanbul.webp',
  ];

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedImages = chunkArray(images, 4);

  return (
    <div>
      <h1>Slider Carousel Example</h1>
      {chunkedImages.map((chunk, index) => (
        <Test key={index} images={chunk} />
      ))}
    </div>
  );
}

export default Program;
