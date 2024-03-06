import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night1",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake1",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night 2",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake 2",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night 3",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake 3",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night 4",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.title} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;

























