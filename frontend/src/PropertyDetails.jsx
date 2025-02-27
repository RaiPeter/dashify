import React from "react";
import "./PropertyDetails.css";
import { useParams } from "react-router";
// import AgentsImage from "./assets/"

const PropertyDetails = () => {
  const params = useParams();
  return (
    <div className="property-details">
      <div className="left">
        <div className="agent">
          <label htmlFor="">Agents Profile</label>
          edit
          <div className="image">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&size=64"
              alt="agent profile image"
            />
            <label htmlFor="">Agent Rahul</label>
          </div>
          <hr />
          <label htmlFor="phone-number">
            <p>Phone Number</p>
            <p>+(2334) 23434</p>
          </label>
          <label htmlFor="email-address">
            <p>Email Address</p>
            <p>asdfev@sic.com</p>
          </label>
          <label htmlFor="address">
            <p>Address</p>
            <p>23 Mrahd, Hbshcu,USA</p>
          </label>
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
              <div>
                features
              </div>
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
