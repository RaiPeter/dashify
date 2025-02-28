import React, { useEffect, useState } from "react";
import "./PropertyDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPenToSquare,
  faArrowUpFromBracket,
  faHouse,
  faKaaba,
  faHeart,
  faPersonSwimming,
  faLeaf,
  faDoorOpen,
  faVideo,
  faSquareParking,
  faDumbbell,
  faSnowflake,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import PropertyImage from "./assets/sdvsr.webp";
import axiosInstance from "./interceptor/interceptor";

const iconMap = {
  Clubhouse :  faKaaba,
  "Fitness Center" : faHeart,
  "Swimming Pool" : faPersonSwimming,
  Gym: faDumbbell,
  Garden : faLeaf,
  "AC & Heating": faSnowflake,
  Fireplace: faFire,
  Balcony : faDoorOpen,
  "Security System" : faVideo,
  Parking : faSquareParking,
};

const PropertyDetails = () => {
  const params = useParams();
  const [features, setFeautres] = useState([])

  useEffect(() => {
    const fetchProperty = async () =>{
      try{
        const response = await axiosInstance.get(
          `/api/properties?${params.toString()}`
        );
        console.log("heasdfasdfasd");
      }catch(e){
        console.error(`Error fetching ${params.name} property details`, e);
      }
    }
    fetchProperty();
  },[params])

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
            <img src={PropertyImage} alt="propery image" />
          </div>
          <div className="header">
            <div>
              <h3>Property Name</h3>
              <h4>345,454,3.</h4>
            </div>
            <div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> Washington, USA
                </p>
                <p>
                  <FontAwesomeIcon icon={faHouse} />
                  Office
                </p>
              </div>
              <div>
                <button>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} /> share
                </button>
              </div>
            </div>
          </div>
          <div className="features">
            <h3>Facility</h3>
            <div className="list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FontAwesomeIcon
                    icon={iconMap[feature]}
                  />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="details">
            <h3>Details & features</h3>
            <pre>Details</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
