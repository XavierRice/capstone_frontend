import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardNew({ data, imageSrc, updatedAt, onLoad, onClick }) {
  return (
    <Card style={{ width: '18rem', position: 'relative' }}>
        <span className="badge rounded-pill custom-pill"> Tag </span> 
      <Card.Img variant="top" src={imageSrc} onLoad={onLoad}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="outline-secondary" className="custom-outline-button" onClick={onClick}></Button>
      </Card.Body>
    </Card>
  );
}

export default CardNew;