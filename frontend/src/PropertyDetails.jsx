import React from "react";
import "./PropertyDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
// import AgentsImage from "./assets/"

const PropertyDetails = () => {
  const params = useParams();
  return (
    <div className="property-details">
      <div className="left">
        <div className="agent">
          <div>
            <label htmlFor="">Agent Profile</label>
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          <div className="image">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&size=64"
              alt="agent profile image"
            />
          </div>
          <div className="name">
            <p>Agent Rahul</p>
          </div>
          <hr />
          <div className="details phone-number">
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>Phone Number</p>
            </div>
            <p>+(2334) 23434</p>
          </div>
          <div className="details email-address">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email Address</p>
            </div>
            <p>asdfev@sic.com</p>
          </div>
          <div className="details address">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Address</p>
            </div>
            <p>23 Mrahd, Hbshcu,USA</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="property">
          <div className="image">
            <img src="" alt="propery image" />
          </div>
          <div className="header">
            <div>
              <h3>Property Name</h3>
              <h4>Property Price</h4>
            </div>
            <div>
              <div>
                <p>Washington, USA</p>
                <p>Office</p>
              </div>
              <div>
                <button>share</button>
              </div>
            </div>
          </div>
          <div className="features">
            <div>
              <h3>Facility</h3>
              <div>features</div>
            </div>
          </div>
          <div className="details">
            <p>Details & features</p>
            <p>Details & features</p>
            <p>Details & features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
