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
import amountFormatter from "./features/utils/amountFormatter";

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
  const id = params.id;
  const [propertyDetails, setPropertyDetails] = useState({})

  useEffect(() => {
    const fetchProperty = async () =>{
      try{
        const response = await axiosInstance.get(`/api/properties/${id}`
        );
        console.log("heasdfasdfasd", response);
        setPropertyDetails(response.data);
      }catch(e){
        console.error(`Error fetching ${params.id} property details`, e);
      }
    }
    fetchProperty();
  },[])

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
            <img src={`http://localhost:8000/property-images/${propertyDetails.property_image}`} alt="propery image" />
          </div>
          <div className="header">
            <div>
              <h3>{propertyDetails.property_name}</h3>
              <h4>{amountFormatter(propertyDetails.property_price)}</h4>
            </div>
            <div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} /> {propertyDetails.property_city}
                </p>
                <p>
                  <FontAwesomeIcon icon={faHouse} />
                  {propertyDetails.property_type}
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
              {propertyDetails.property_features?.map((feature, index) => (
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
            <p>{propertyDetails.property_details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
