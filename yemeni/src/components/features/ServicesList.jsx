import React from "react";
import Card from "../UI/Card";
import Service from "./Service";
import { root_services } from "../../data";
import { useTranslation } from "react-i18next";
import { translateServices } from "../../translations/translator";

const ServicesList = () => {
  const [t, i18n] = useTranslation();

  const services = translateServices(i18n, root_services);

  services.forEach((ser) => console.log(ser));

  return (
    <div className="flexbox-3 service-list">
      {services.map((service, index) => {
        return (
          <Card key={index}>
            <Service
              key={index}
              name={service.name}
              description={service.description}
              basicIcon={service.icon}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default ServicesList;
