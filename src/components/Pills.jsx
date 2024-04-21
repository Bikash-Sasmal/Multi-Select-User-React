import React from "react";

const Pills = ({ image, text, onClick }) => {
  return (
    <span className="user-pill" onClick={onClick}>
      <img src={image} alt={text} />
      <span>{text} &times;</span>
    </span>
  );
};

export default Pills;
