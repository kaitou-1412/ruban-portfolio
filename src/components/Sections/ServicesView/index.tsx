import React from "react";
import Service from "../../Cards/Service";
import "./index.css";

const servicesData = [
  {
    id: 1,
    logo: "desktop",
    title: "Front-end Development",
    description:
      "Apps that get the job done while providing a good experience for it's users.",
  },
  {
    id: 2,
    logo: "database",
    title: "Back-end Development",
    description:
      "Secure APIs that help for building fast and efficient applications.",
  },
  {
    id: 3,
    logo: "table",
    title: "Data Science",
    description:
      "Perform data analysis, extract insightful information from the given datasets and apply it in various applications.",
  },
];

const ServicesView = () => {
  return (
    <div className="services-view-container">
      <div className="sevices-view-title">What I've got to offer</div>
      <div className="services-view-description">
        Different tools and skills to help you understand me better.
      </div>
      <div className="services-view">
        {servicesData.map((service) => (
          <Service
            key={service.id}
            id={service.id}
            logo={service.logo}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesView;
