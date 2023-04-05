import { useState } from "react";
import "./components css/Card.css";

function Card(props) {
  const [color, setColor] = useState(props.cardData.color);

  return (
    <div
      id={props.cardData.id}
      className="card"
      key={props.cardData.id}
      style={{ background: color }}
    >
      <div className="cardTitle">
        {props.cardData.title}
        <div className="cardButtons">
          <button
            onClick={(event) => {
              event.target.remove();
              setColor("green");
            }}
            className="card__button__Done"
          >
            Done
          </button>
          <button
            onClick={() => {
              const card = document.getElementById(`${props.cardData.id}`);
              card.remove();
            }}
            className="card__button__Remove"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cardTimeAndDate">
        <span>{props.cardData.day}</span>
        <span>{props.cardData.time}</span>
      </div>
    </div>
  );
}
export default Card;
