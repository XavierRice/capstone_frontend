import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ title, imageSrc, text, updatedAt }) => {
  return (
    <BootstrapCard bg="dark" text="white" className="m-5">
      <BootstrapCard.Img src={imageSrc} alt="Card image" />
      <BootstrapCard.ImgOverlay>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        {/* <BootstrapCard.Text>{text}</BootstrapCard.Text> */}
        <BootstrapCard.Text>Last updated {updatedAt}</BootstrapCard.Text>
      </BootstrapCard.ImgOverlay>
    </BootstrapCard>
  );
};

export default Card;
