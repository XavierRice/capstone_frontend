import React, { useState, useEffect } from "react";
import Card from "../Components/Card"; // Adjust the path as needed

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          title: "New Discoveries in Space",
          imageSrc: "https://source.unsplash.com/random/800x600/?space",
          text: "Scientists have made groundbreaking discoveries in the field of astrophysics, shedding new light on the mysteries of the universe. Recent observations from telescopes around the world have revealed...",
          updatedAt: "Just now",
        },
        {
          id: 2,
          title: "Climate Change Summit Recap",
          imageSrc: "https://source.unsplash.com/random/800x600/?climate",
          text: "World leaders gathered for the annual Climate Change Summit to address the pressing issues facing our planet. Discussions ranged from renewable energy initiatives to...",
          updatedAt: "1 hour ago",
        },
        {
          id: 1,
          title: "New Discoveries in Space",
          imageSrc: "https://source.unsplash.com/random/800x600/?space",
          text: "Scientists have made groundbreaking discoveries in the field of astrophysics, shedding new light on the mysteries of the universe. Recent observations from telescopes around the world have revealed...",
          updatedAt: "Just now",
        },
        {
          id: 2,
          title: "Climate Change Summit Recap",
          imageSrc: "https://source.unsplash.com/random/800x600/?climate",
          text: "World leaders gathered for the annual Climate Change Summit to address the pressing issues facing our planet. Discussions ranged from renewable energy initiatives to...",
          updatedAt: "1 hour ago",
        },
      ];
      setEventsData(mockData);
      setLoading(false);
    }, 3000);
  }

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {eventsData.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              imageSrc={event.imageSrc}
              text={event.text}
              updatedAt={event.updatedAt}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
