import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardSlider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const cardSlider = () => {
  const backend = import.meta.env.VITE_BACKEND_URL
    const [fetchedEvents, setFetchedEvents] = useState([])

   useEffect(()=> {
    const fetchEvents = async () => {
      
        let fetchEventsData = [];
        let fetchedVirtualEvents = [];
  
        try {
          const resposeBackend = await axios.get(`${backend}/events`);
          fetchEventsData = resposeBackend.data.data;
          setFetchedEvents(fetchEventsData)
        }catch(error){
          console.error('Error Fetching Backend Events:', error)
        }

      }
      
      fetchEvents()
   }, [fetchedEvents])


    return (
        <div className="carousel-container">
         <Swiper
        slidesPerView={3} // Display 3 slides per view
        spaceBetween={30} // Adjust the space between slides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                <SwiperSlide>
                    <img src="https://avatars.githubusercontent.com/u/76771864?v=4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default cardSlider;