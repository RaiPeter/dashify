import React from "react";
import "./Card.css";
import PropertyIcons from "../../src/assets/property1.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Card = ({name, amount, update,icon}) => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-name">
          <p>{name}</p>
          <h3>{amount}</h3>
        </div>
        <div className="card-icon">
          <FontAwesomeIcon icon={icon}/>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-month">
            <p>From last month</p>
        </div>
        <div className="card-update">
            <h4>{update}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
