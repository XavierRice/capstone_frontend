import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ variant, onClick, children }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
