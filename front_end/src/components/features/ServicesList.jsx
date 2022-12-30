import React from "react";
import Card from "../UI/Card";
import Service from "./Service";
import { root_services } from "../../data";
import { useTranslation } from "react-i18next";
import { translateServices } from "../../translations/translator";
import { useMemo } from "react";

const ServicesList = () => {
  const [t, i18n] = useTranslation();

  const services = useMemo(
    () => translateServices(i18n.language, root_services),
    [i18n.language]
  );  

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
