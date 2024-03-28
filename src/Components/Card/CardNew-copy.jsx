import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import noImage from '../../assets/NoImage.jpg'


function CardNew({cardObj, tag,  imageLoad, cardClick }) {

  const [styleClick, setStyleClick] = useState(false)
 
const reducedCard = {
  card_title: cardObj.event_title || cardObj.news_title|| "title missing",
  // event_details || news_content -- text
  card_text : cardObj.event_details || cardObj.news_content || "text missing", 
  // event_photo || news_image -- image
  card_photo: cardObj.event_photo|| cardObj.news_image || noImage,
  // event_keywords || news_keywords -- keywords
  card_keywords: cardObj.event_keywords || cardObj.news_keywords || "keyword missing",
  // key = i
}

const handleStyleChange = () =>{
  setStyleClick(!styleClick)
  
};


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}> {/* This div centers the card vertically */}
      <Card className={`new_card ${styleClick? 'card-clicked' : ''}`} onClick={cardClick} onLoad={imageLoad}>
        <span className="badge rounded-pill card-pill">{tag}</span> 
        <Card.Img variant="top" src={reducedCard.card_photo} />
        <Card.Body>
          <Card.Title>{reducedCard.card_title}</Card.Title>
          <Card.Text>
            {reducedCard.card_text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardNew;


/* <Card style={{ width: '18rem', position: 'relative' }}>
        <span className="badge rounded-pill custom-pill">{reducedCard.card_keywords[0]} </span> 
      <Card.Img variant="top" src={reducedCard.card_photo} />
      <Card.Body className='card-body'>
        <Card.Title>{reducedCard.card_title}</Card.Title>
        <Card.Text>
          {reducedCard.card}
        </Card.Text>
      </Card.Body>
    </Card>*/