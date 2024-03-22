/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ title, imageSrc, text, updatedAt, onLoad, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <BootstrapCard bg="dark" className="m-5">
        <BootstrapCard.Img  variant="top" src={imageSrc} alt="Card image" onLoad={onLoad} />
        <BootstrapCard.ImgOverlay>
          <BootstrapCard.Title className="text-custom-color">
            {title}
          </BootstrapCard.Title>
          <BootstrapCard.Text className="text-custom-color">
            {text}
          </BootstrapCard.Text>
          <BootstrapCard.Text className="text-custom-color">
            Last updated {updatedAt}
          </BootstrapCard.Text>
        </BootstrapCard.ImgOverlay>
      </BootstrapCard>
    </div>
  );
};
export default Card;
