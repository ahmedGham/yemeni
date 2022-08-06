import React from "react";
import { root_contacts } from "../../data";
import Card from "../UI/Card";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import { translateContacts } from "../../translations/translator";
const ContactList = () => {
  const [t, i18n] = useTranslation();
  const contacts = translateContacts(i18n,root_contacts);
  
  return (
    <div className="flexbox-3 service-list">
      {contacts.map((service, index) => {
        return (
          <Card key={index}>
            <Contact
              name={service.name}
              content={service.content}
              icon={service.icon}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default ContactList;
