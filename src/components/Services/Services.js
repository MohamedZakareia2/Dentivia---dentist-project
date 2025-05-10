import "./Services.css";
import whitepic from "../../Assets/white.jpg";
import TeethOrthodontic from "../../Assets/Teeth Orthodontic.jpg"; // Add other images
import OralSurgery from "../../Assets/Oral Surgery.jpg";
import TeethImplants from "../../Assets/Teeth Implants.jpg";
import CheckUp from "../../Assets/Teeth Check Up.jpg";
import React, { useState } from "react";

const Services = ({ refs }) => {
  // State to track selected service and its image
  const [selectedService, setSelectedService] = useState({
    name: "Teeth Whitening",
    image: whitepic,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  });

  // Service data array
  const services = [
    {
      name: "Teeth Whitening",
      image: whitepic,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      name: "Teeth Orthodontic",
      image: TeethOrthodontic,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      name: "Oral Surgery",
      image: OralSurgery,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      name: "Teeth Implants",
      image: TeethImplants,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      name: "Teeth Check Up",
      image: CheckUp,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div ref={refs.servicesRef} className="c-Services">
      <div className="header-s">
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Etiam et purus a odio finibus
          bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
      </div>
      <div className="Services-list">
        <ul>
          {services.map((service) => (
            <li 
              key={service.name}
              onClick={() => handleServiceClick(service)}
              className={selectedService.name === service.name ? "active" : ""}
            >
              <a>{service.name}</a>
            </li>
          ))}
        </ul>
        <div className="serice-type">
          <div className="l-serice-type">
            <div className="l-serice-type-bg"></div>
            <img alt={selectedService.name} src={selectedService.image} />
          </div>
          <div className="r-serice-type">
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            <button>Make an Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;