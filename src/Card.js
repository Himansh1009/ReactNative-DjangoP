import React from "react";
import './Card.css'; // Import the CSS for styling

const Card = (props) => {
  const [num, setNum] = React.useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="title-section">
          <h2 className="card-title">{props.title}</h2>
          <div className="square-placeholder"></div>
          <div className="square-placeholder"></div>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{props.productName}</h3>
        <p className="time-left">{props.timeLeft}</p>
      </div>
      <div className="card-footer">
        <div className="avatars">
          {props.avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`User ${index + 1}`}
              className="avatar"
            />
          ))}
          <span className="plus-others">{props.plusOthers}</span>
        </div>
        <div className="circle-placeholder"></div>
      </div>
    </div>
  );
};

export default Card;