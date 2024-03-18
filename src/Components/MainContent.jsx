/* eslint-disable no-unused-vars */

import React from 'react'
import Carousel from './Carousel/Carousel'
import Card from './Card/Card'
import { Container, Col, Row } from 'react-bootstrap';
import FilterBtn from './FilterBtn';

function MainContent() {
    const mockEventData = [
        {
          id: 1,
          event_title: "Conference on Technology",
          event_photo: "https://picsum.photos/id/1015/200/300",
          event_details: "Join us for an exciting conference on the latest technology trends.",
        },
        {
          id: 2,
          event_title: "Art Exhibition",
          event_photo: "https://picsum.photos/id/1016/200/300",
          event_details: "Experience the beauty of art in our upcoming exhibition.",
        },
        {
          id: 3,
          event_title: "Music Concert",
          event_photo: "https://picsum.photos/id/1018/200/300",
          event_details: "Get ready for an electrifying music concert with top artists.",
        },
        {
          id: 4,
          event_title: "Food Festival",
          event_photo: "https://picsum.photos/id/1019/200/300",
          event_details: "Satisfy your taste buds with delicious cuisines at our food festival.",
        },
        {
          id: 5,
          event_title: "Fitness Workshop",
          event_photo: "https://picsum.photos/id/1021/200/300",
          event_details: "Join us to learn and practice various fitness techniques.",
        },
        {
          id: 6,
          event_title: "Book Launch",
          event_photo: "https://picsum.photos/id/1023/200/300",
          event_details: "Discover new books and meet the authors at our book launch event.",
        },
      ];
      
    
      
  return (
    <Container className="m-5">
    <div className="fs-4 mb-3 fw-bold text-dark">
      Discover events inspired by what you care about
  
    </div>
    <div className='btn rounded-pill mb-4 mt-4'>
      <FilterBtn />
      </div>
   

    <div className='events-cards '>
    <Row>
      <Col xs={9} md={6} className="">
        <Carousel />
      </Col>

      <Col xs={9} md={3} className="">
        {mockEventData.slice(0, 3).map((event) => (
          <Card
            key={event.id}
            title={event.event_title}
            imageSrc={event.event_photo}
            text={event.event_details}
         
          />
        ))}
      </Col>
      <Col xs={9} md={3} className="mb-3">
        {mockEventData.slice(3, 6).map((event) => (
          <Card
            key={event.id}
            title={event.event_title}
            imageSrc={event.event_photo}
            text={event.event_details}
          />
        ))}
      </Col>
    </Row>
    </div>
  </Container>
)
}


export default MainContent